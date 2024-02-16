```tsx
interface TestProps {
    title?: string;
    name?: string;
}

const Test = ({title = 'Mr', name = 'McGee'}: TestProps) => {
    return (
        <p>
            {title} {name}
        </p>
    );
}
```

## Cred
- https://stackoverflow.com/a/59757984/15579591

## Backlinks
- [[Typing with Typescript]]