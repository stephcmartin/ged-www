# ged-www
For the purposes of this project, I have defined the Internet as the test data in ```internet1.json``` and ```internet2.json```, and a web crawler as software that requests pages from the Internet, parses the content to extract all the links in the page, and visits the links to crawl those pages, to an infinite depth.

## Assumptions

Based on the notes that were given to me I have the following assumtpion:

- Each link in ```internet.pages.address``` will always be a successful crawl,
- i.e will go into the 'results.sucess' array
- Any repeates beteen ```internet.pages.address``` and ```internet.pages.links``` will be counted as a skip and go into the 'results.skipped' array
- Anything else will be counted as an error and will be 'results.error'

### The expected output of internet1.json is:

```
Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p4", "http://foo.bar.com/p5", "http://foo.bar.com/p6"]

Skipped: ["http://foo.bar.com/p2", "http://foo.bar.com/p4","http://foo.bar.com/p1", "http://foo.bar.com/p5"]

Error: ["http://foo.bar.com/p3", "http://foo.bar.com/p7"]

```

### The expected output of internet2.json:

```
Success: ["http://foo.bar.com/p1", "http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4". "http://foo.bar.com/p5"]

Skipped: ["http://foo.bar.com/p1"]

Error: []
```
