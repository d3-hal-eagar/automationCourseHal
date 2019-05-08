| Selector           |       Example        |                                                                     Example description |
| ------------------ | :------------------: | --------------------------------------------------------------------------------------: |
| .class             |        .intro        |                                                 Selects all elements with class="intro" |
| #id                |      #firstname      |                                                 Selects the element with id="firstname" |
| \*                 |          \*          |                                                                    Selects all elements |
| element            |          p           |                                                                Selects all <p> elements |
| element,element    |        div, p        |                                         Selects all <div> elements and all <p> elements |
| element element    |        div p         |                                          Selects all <p> elements inside <div> elements |
| element>element    |       div > p        |                            Selects all <p> elements where the parent is a <div> element |
| element+element    |       div + p        |               Selects all <p> elements that are placed immediately after <div> elements |
| element1~element2  |        p ~ ul        |                           Selects every <ul> element that are preceded by a <p> element |
| [attribute]        |       [target]       |                                            Selects all elements with a target attribute |
| [attribute=value]  |  [target="_blank"]   |                                              Selects all elements with target="\_blank" |
| [attribute^=value] |   a[href^="https"]   |                Selects every <a> element whose href attribute value begins with "https" |
| [attribute$=value] |   a[href$=".pdf"]    |                 Selects every <a> element whose href attribute value ends with ".pdf" v |
| [attribute*=value] | a[href*="w3schools"] | Selects every <a> element whose href attribute value contains the substring "w3schools" |
| :not(selector)     |       :not(p)        |                                         Selects every element that is not a <p> element |
| :nth-child(n)      |    p:nth-child(2)    |                        Selects every <p> element that is the second child of its parent |
| :nth-of-type(n)    |   p:nth-of-type(2)   |                  Selects every <p> element that is the second <p> element of its parent |
