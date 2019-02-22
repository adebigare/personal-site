“I want to build the Wikipedia of business,” said our faculty chair during a Digital Initiative (DI) meeting one day.  It was a tall ask, but I was curious and intrigued by the proposition. Harvard Business School [literally invented the MBA.](https://www.hbs.edu/about/facts-and-figures/Pages/history.aspx) If any higher education institution could create “the Wikipedia of business” it would be HBS. So I picked up the thread.

### The Problem
>  How might we create a networked, public, scalable writing platform for academic use in HBS classes and beyond, that supports aggregation and widespread dissemination of knowledge.

The Digital Initiative was already overseeing a sort-of pilot test on another platform, Open Forum, when I joined the team.  The problem was that Open Forum was made for multi-phase innovation challenges, not networked knowledge sharing. Nonetheless, I was able to use data from surveys and interviews with students from the pilot provide a proof-of-concept, develop some initial success metrics, and create some guard rails for the MVP.

### Limitations

#### Time
The academic schedule became our greatest nemesis. If the initial MVP wasn’t up by the start of class, we would miss our window to launch and be forced to wait until the spring semester. When user testing, we had to take into account school breaks and major testing times. Usually we were left with a couple days every two months that we could meet with people in-person, so we had to make the most of them.

Faculty–our primary users–were also time poor, meaning that the system needed to be quick to establish and learn. Student tech literacy was below-average, so considerations needed to be made to accommodate.

As the project became more known, IT became more interested, and with it all the institutional cruft that accompanies one of the oldest schools in the country. Building social capital then became one of my biggest time requirements.

#### Budget
Budget was another major limitation. Though HBS and Harvard are well-endowed and well-known institutions, I worked within a small research team within a small department. Our budget had to accommodate conferences, trips, and other programs. Additionally, we were never meant to be a software team, and thus were not allocated the kind of budget needed for software projects. Thus, I acted as de facto designer/product/project/sales/customer success/marketing associate to make full use of the funds available to me for development.

#### Privacy
Harvard isn’t known as a transparent institution, which runs up against a public platform very quickly. There were also concerns about how student data would be handled, and how this all related to the [bogeyman of the education world, FERPA](https://studentprivacy.ed.gov/faq/what-ferpa). Open Knowledge would need to contend with these questions and provide bulletproof explanations in order to keep running in the long term.

#### Existing Graphic Design Constraints
HBS Marketing and Communications has [extensive branding guidelines](http://www.hbs.edu/marketing/). Open Knowledge would need to honor these, while accounting for the different use case the platform served.

### Metrics
+ 10,000 page views per month
+ 2–3 links from outside sources
+ 50% positive survey responses
+ First page Google results for relevant business topics
+ Students use the platform outside of class
+ 50% penetration into student population

### Solutions

#### UI Design
Using [the Open Forum](http://www.hbs.edu/openforum/openforum.hbs.org/challenge/understand-digital-transformation-of-business.html) pilot as a starting point, we interviewed users about what worked and didn’t. The client-side experience was good enough, so we used much of it for the new Wordpress-based platform.

<img class="full-width img__gapped" src="https://imgur.com/3dnEdsH.png" alt="UI of OK page at various sizes">

The marketing guidelines made visual design less of an undertaking, since color palettes, typefaces, and many guidelines already existed. I had to take some creative license when building class lockups, but used the [school's guidelines on clubs](http://www.hbs.edu/marketing/mba-student-clubs.html) and societies as a guardrail

<img class="img-4x3 img__gapped" src="https://imgur.com/K9Yu4OQ.png" alt="sample lockup for OK class">

I spent a considerable amount of time designing custom dashboards for students and faculty. Interviews had shown us that student tech literacy was below-average, and necessitated an easy to follow posting process. This meant that the standard Wordpress dashboard would be too complex. Thus we developed a simple front-end interface for students.

<img class="img-4x3 img__gapped" src="https://imgur.com/gcaXmjX.png" alt="Student Posting View">

Faculty needed specific tools to allow them to grade, curate, and share student submissions.

<img class="img-4x3 img__gapped" src="https://imgur.com/6gJbNE8.png" alt="Faculty Grading Widget">

There were five initial user types, including two types of commenter-user. To ensure the continued public nature of the system, we allowed anyone to create a profile and comment on posts. But these posts would need to be approved by someone with sufficient access. To make this moderation process a quick as possible for site admins, we built this dashboard widget that appears on the dashboard homepage.

<img class="img-4x3 img__gapped" src="https://imgur.com/ZMMfDqs.png" alt="Faculty and admin quick comment moderation dashboard">

Due to the time constraints, we launched the platform without archiving functionality since there wouldn’t be a need to archive content until the second year. But the second year came eventually, and I took the opportunity to freshen up the site as a whole in conjunction with the new functionality.

<img class="img-4x3 img__gapped" src="https://imgur.com/bGH12oK.gif" alt="Archive gif">

#### System Design
The digital experience was only one piece of the puzzle. I had to develop multiple avenues of support and on-boarding as classes began using the site. An online/offline pedagogical model had never been used at HBS, and thus faculty needed guidance on how to most successfully integrate OK posts into classroom discussions. But the admin team were not subject-matter experts. I worked with the internal Teaching and Learning department to develop materials and events centered on this new pedagogy, and convened current and new OK faculty users to discuss their concerns and learnings.

<img class="img-4x3 img__gapped" src="https://imgur.com/NobLaS2.png" alt="Training day for instructors">

I also had to convince members of the Teaching and Learning department that this pedagogical model was worth their time and effort. To accomplish this goal I brought in a leading figure in the field of networked learning, Justin Reich, to give a seminar on the benefits of such a model.

I also needed to train faculty and staff on the features of the platform, which then needed to be reinforced through videos and how-to guides. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/pMvnTTX0PAU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### My Role
I was essentially everyone that wasn’t software development. So this meant developing design prototypes, managing project timelines, scoping new development, evangelizing the product, on boarding new users, customer support, and liaising with other internal departments. 

Software development was completed by Reaktiv Studios, who became integral partners as we continued to grow the project. On several occasions I brought in outside UX help when specific projects required more granular research than I had the bandwidth to accomplish

### Lessons Learned
#### Putting the “minimum” in “minimum viable product”
We launched the initial product within eight weeks. It was essentially a Hollywood movie set. But this strategy allowed us to continue development of features while professors had something to show students on the first day of class.

Watch our dev lead and me talk about this process at Wordcamp 2016 [Josh Eaton and Adrienne Debigare: Getting Classroom Blogging Up and Running in Higher-Education | WordPress.tv](https://wordpress.tv/2016/08/14/joshua-eaton-and-adrienne-debigare-getting-classroom-blogging-up-and-running-in-higher-education/)

#### Meeting metrics…and more
The project was more successful than anyone had really anticipated. We hit many of our metrics within the first year. Even more surprising, we had built a tool that [changed the pedagogy at HBS.](https://forbes.com/sites/hbsworkingknowledge/2017/03/15/more-than-900-examples-of-how-climate-change-affects-business/#7f21795952ba)

> Open Knowledge feels **modern**, **relevant**, **current** unlike everything else that’s centered around dogma, ‘this is the way we’ve been doing things for 107 years.’
– HBS Student

> Students’ blogging helped me to uncover new areas of research that I hadn’t considered or known about.
– HBS Faculty

The overall feeling was that this experiment was a step in the right direction in the modernization of HBS. Students enjoyed the work, enjoyed the public-facing nature of the posts, and felt more heard during their time within classes.

#### Becoming a bureaucratic chameleon
Navigating the complex relationships of Harvard was one of my proudest accomplishments, and most wide-ranging lessons learned during my time with HBS. When we first began building Open Knowledge, no one outside our initiative and our pilot users cared about what we were doing. It was a small project, and limited to a few classes. Though we tried to enlist help from the IT department’s education technology group, they had a backlog six months long.

As Open Knowledge gained popularity and notoriety, more departments started to become interested in or concerned with our presence. Thus I spent several months on (what I jokingly refer to as) the “Open Knowledge Roadshow”

<div class="iframe"><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSs6_MzFNRd22gy5rtANLmnsOIDS4nVhBHsjUPn8JV4rbklrV1P8AUjwdr-huApQ4PbT55pLkGg7acr/embed?start=false&loop=false&delayms=60000" frameborder="0"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>

People were excited by the new opportunities available with a tool like this, and interested in collaboration. So I built out an internal advisory committee (a successful process I had discovered during my time at The Boston Globe), comprised of representatives from various internal departments. Their job would be to collaborate with the OK team on specific initiatives, and report back news to their department heads. In this way, departments could continue to feel included with the output being productive for both parties.



