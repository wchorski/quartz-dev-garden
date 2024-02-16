
My Linux server wasn't able to ping my Windows Machine. I could just disable the Firewall for any private networks, but here is the 'right' way to do it

> [!quote] 
> (2) Configure Windows Firewall to allow ICMP requests
Check the ICMP settings of Windows. Just check Start > Run > firewall.cpl > Advanced Settings. You get Windows Defender Firewall with Advanced Security. Now create Inbound and Outbound rules to allow ICMP requests. Check Inbound Rules and Outbound Rules. In the right pane, find the file and printer sharing rules (Echo Request - ICMPv4-In). Right-click each rule and select Enable Rule. This may resolve the issue of the ping problem.

All I flipped on was that first `inbound rule` > `File and Printer Sharing (Echo Request - ICMPv4-In)` > `Private,Public` to enabled

---
## Credits
- [Problem Solved: Unable to ping Computer in the same network | All About Testing](https://allabouttesting.org/problem-solved-unable-to-ping-computer-in-the-same-network/#:~:text=Problem%20Solved%3A%20Unable%20to%20ping%20Computer%20in%20the,5.%20Configure%20Linux%20firewall%20to%20configure%20ping%20)

## Backlinks
- [Microsoft Windows](📁developer/Windows%2010/Microsoft%20Windows.md)