## Stackoverflow
### problem
I have separate components that house [Tiptap Editor](https://tiptap.dev/) tables. At first I had a save button for each Child Component which worked fine, but was not user friendly. I want to have a unified save button that will iterate through each child Table component and funnel all their `editor.getJSON()` data into an array of `sections` for the single  **doc object** . Then finish it off by saving the whole object to `PouchDB`

## What did I try?

link to the repo → [wchorski/Next-Planner: a CRM for planning events built on NextJS (github.com)](https://github.com/wchorski/Next-Planner)

### Try #1 
I tried to use the `useRef` hook and the `useImperativeHandle` to call and return the `editor.getJSON()`. But working with an **Array Ref** went over my head. I'll post some code of what I was going for
```jsx
// Parent.jsx
const childrenRef = useRef([]);
childrenRef.current = []


  const handleRef = (el) => {
    if(el && !childrenRef.current.includes(el)){
      childrenRef.current.push(el)
    }
  }

  useEffect(() =>{
	  childrenRef.current[0].childFunction1() // I know this doesn't work, because this is where I gave up
  })
```

```jsx
// Child.jsx
useImperativeHandle(ref, () => ({
    childFunction1() {
      console.log('child function 1 called');
    },
    childFunction2() {
      console.log('child function 2 called');
    },
  }))
```

### Try #2
I set a state counter and passed it down as a prop to the **Child Component** . Then I update the counter to trigger a child function 

```jsx
// Parent.jsx
export const Planner = ({id, doc, rev, getById, handleSave, db, alive, error}) => {

	const [saveCount, setSaveCount] = useState(0)
	
	const  handleUpdate = () =>{
		setSaveCount(prev => prev + 1)
	}

  const isSections = () => {
    if(sectionsState[0]) handleSave(sectionsState)
    if(sectionsState[0] === undefined) console.log('sec 0 is undefined', sectionsState)
  }

  function updateSections(newSec) {

    setsectionsState(prev => {
      const newState = sectionsState.map(obj => {
        if(!obj) return

        if (obj.header === newSec.header) {
          return {...obj, ...newSec}
        }

        // 👇️ otherwise return object as is
        return obj;
      });
      console.log('newState', newState);
      return newState;
    });
  }

  useEffect(() => {
    setsectionsState(doc.sections)

  }, [doc])
  
  return (<>

    <button 
      title='save'
      className='save'
      onPointerUp={handleUpdate}>
        Save to State <FiSave />
    </button>
    
    <button 
      style={{right: "0", width: 'auto'}}
      title='save'
      className='save'
      onClick={isSections}>
        Save to DB <FiSave />
    </button>

  
    {doc.sections.map((sec, i) => {

      if(!sec) return 

      return (

          <TiptapTable 
            key={i}
            id={id} 
            rev={doc.rev}
            getById={getById}
            updateSections={updateSections}
            saveCount={saveCount}
            section={sec} 
            db={db} 
            alive={alive} 
            error={error} 
          />

      )
    })}
  </>)
```

```jsx
// Child.jsx
export const TiptapTable = ((props, ref) => {

  const {id, section, updateSections, saveCount} = props

  const [currTimeStart, setTimeStart] = useState()
  const [defTemplate, setdefTemplate] = useState('<p>loading<p>')
  const [isLoaded, setIsLoaded] = useState(false)
  const [notesState, setnotesState] = useState('')

  const editor = useEditor({
    extensions: [
      History,
      Document,
      Paragraph,
      Text,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow.extend({
        content: '(tableCell | tableHeader)*',
      }),
      TableHeader,
      TableCell,
    ],
    // i wish it was this easy
    content: (section.data) ? section.data : defTemplate,

  }, [])

  const  pickTemplate = async (name) => {
    try{
      const res = await fetch(`/templates/${name}.json`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
			const data = await res.json()
      
      setIsLoaded(true)
      setdefTemplate(data)
      console.log('defTemplate, ', defTemplate);
      // return data

    } catch (err){
      console.warn('template error: ', err);
    }
  }

  function saveData(){

    console.log(' **** SAVE MEEEE ', section.header);
    try{
      const newSection = {
        header: section.header,
        timeStart: currTimeStart,
        notes: notesState,
        data: editor.getJSON(),
      }

      updateSections(newSection)

    } catch (err){
      console.warn('table update error: ', id, err);
    }
  }

  useEffect(() => {

    // 👇️ don't run on initial render
    if (saveCount !== 0) saveData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveCount])
  


  useEffect(() => {
    setTimeStart(section.timeStart)
    setnotesState(section.notes)

    if(!section.data) pickTemplate(section.header).catch(console.warn)
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, section, isLoaded])

  useEffect(() => {
    if (editor && !editor.isDestroyed) {

      if(section.data) editor.chain().focus().setContent(section.data).run()

      if(!section.data) editor.chain().focus().setContent(defTemplate).run()

      setIsLoaded(true)
      
    }
  }, [section, defTemplate, editor]);


  if (!editor) {
    return null
  }

  return isLoaded ? (<>

    <StyledTableEditor>

      <div className="title">
        <input type="time" label='Start Time' className='time' 
          onChange={(e) => setTimeStart(e.target.value)}

          defaultValue={currTimeStart}
        />

        <h2>{section.header}</h2>

      </div>

      <EditorContent editor={editor} className="tiptap-table" ></EditorContent>
      // ... non relavent editor controls

          <button 
            title='save'
            className='save2'
            onPointerUp={() => saveData()}>
              Save <FiSave />
          </button>
        </div>

      </nav>

        
    </StyledTableEditor>
  </>) 
  : null
})
TiptapTable.displayName = 'MyTiptapTable';
```

## What I Expected

What I expected was the parent state to update in place, but instead it overwrites the previous tables. Also, once it writes to **PouchDB** it doesn't write a single piece of new data, just resolved back to the previous, yet with an updated `_rev` revision number.

In theory I think i'd prefer the `useRef` hook with `useImperativeHandle` to pass up the data from child to parent. 

It looks like [this question](https://stackoverflow.com/questions/48919259/mapping-state-of-children-to-parent-array-state ) is similar but doesn't programmatically comb through the children