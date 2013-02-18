node-whois-server
===

node-whois-server is a demo to highlight how simple the whois services provided by domain registries and registrars is. It's implemented in node.js, and requires no modules outside of those provided by a base node installation.

Running
---

To run the server, simply execute the following from a command line:

	node whois-server.js

Note: in order to run on the standard port 43, you'll likely need to elevate to root (which I'd recommend you *not* do on a production system):

	sudo node whois-server.js

All requests received by the server will be responded to with the `template.txt` file (with the domain name replaced). It should be obvious that this demo is not a real server, but it would also be a trivial exercise to connect this simple server to a database and return meaningful responses.

Bugs
---
Lots. This is a demo, silly.
