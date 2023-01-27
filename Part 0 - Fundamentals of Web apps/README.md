# 0.4: New note diagram
```mermaid
sequenceDiagram
		Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note over Server,Browser: New note sent to server in payload as form data
    Server-->>-Browser: Status code 302 for redirecting to referer
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>-Browser: HTML Document
    Note over Server,Browser: There are two references mentioned in responded HTML document, <br>there will be API call for each reference.
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server -->>-Browser: CSS File
    Browser ->>+ Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server -->>-Browser: JS File
    Note  over Browser, Server: JS file executed to fetch json from server
    Browser ->>+ Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server -->>-Browser: Json File
    Note  over Browser, Server: Browser renders notes json 
```

# 0.5: Single page app diagram
```mermaid
sequenceDiagram
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Note over Server,Browser: New note sent to server in payload as form data
    Server-->>-Browser: HTML Document
    Note over Server,Browser: There are two references mentioned in responded HTML document, <br>there will be API call for each reference.
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server -->>-Browser: CSS File
    Browser ->>+ Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server -->>-Browser: JS File
    Note  over Browser, Server: JS file executed to fetch json from server
    Browser ->>+ Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server -->>-Browser: Json File
    Note  over Browser, Server: Browser renders notes json 
```

# 0.6: New note in Single page app diagram
```mermaid
sequenceDiagram
    Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note over Server,Browser: Client update local list, then send post request to server 
    Server-->>-Browser: Note creation message
```