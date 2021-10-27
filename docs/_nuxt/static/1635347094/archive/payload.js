__NUXT_JSONP__("/archive", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{articles:[{slug:"importing-venmo-transactions-to-ynab",description:"How I use a tool I built to keep YNAB synced with activity from Venmo.",title:"Importing Venmo Transactions to YNAB",tags:["projects","budgeting"],createdAt:"2021-10-26T00:00:00.000Z",toc:[{id:K,depth:s,text:L},{id:M,depth:s,text:N},{id:O,depth:s,text:P}],body:{type:E,children:[{type:b,tag:d,props:{},children:[{type:a,value:"When Venmo started shutting down access to its API and You Need a Budget (YNAB) stopped its Direct Import feature for the service, it was left up to the users to figure out how to budget their money moving through Venmo. YNAB wrote a "},{type:b,tag:e,props:{href:Q,rel:[g,h,i],target:j},children:[{type:a,value:"blog post"}]},{type:a,value:" about it with some recommendations on how to manage funds and it's that blog post that motivated me to write "},{type:b,tag:e,props:{href:y,rel:[g,h,i],target:j},children:[{type:a,value:u}]},{type:a,value:", a small script to help with importing Venmo transactions to YNAB."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This article is about how I use this tool to keep YNAB up to date with activity from my Venmo account. It's free to use so if it's something you'd like to try, read on."}]},{type:a,value:c},{type:b,tag:z,props:{id:"who-this-tool-is-for"},children:[{type:b,tag:e,props:{href:"#who-this-tool-is-for",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:"Who this tool is for"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:y,rel:[g,h,i],target:j},children:[{type:a,value:u}]},{type:a,value:" is a Python script that converts a Venmo statement to a CSV format suitable for importing into YNAB. It works for people who use Venmo and YNAB based on Option Two in the YNAB blog post "},{type:b,tag:e,props:{href:Q,rel:[g,h,i],target:j},children:[{type:a,value:"How to Manage Venmo in YNAB"}]},{type:a,value:". This tool may be helpful for you if:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:"You're a frequent user of Venmo and you "},{type:b,tag:r,props:{},children:[{type:a,value:"carry a balance in your account"}]}]},{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:"You've set up your Venmo account in YNAB to function like a checking account"}]},{type:a,value:c},{type:b,tag:F,props:{},children:[{type:a,value:"You are comfortable with using the command line 🙂"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you were manually entering your transactions from Venmo into YNAB, this tool may be for you!"}]},{type:a,value:c},{type:b,tag:z,props:{id:"setting-up-venmo2ynab"},children:[{type:b,tag:e,props:{href:"#setting-up-venmo2ynab",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:"Setting up "},{type:b,tag:k,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fmike-douglas\u002Fvenmo2ynab#readme",rel:[g,h,i],target:j},children:[{type:a,value:"GitHub repo's README"}]},{type:a,value:" has the setup steps that are pretty easy, but I'll modify the installation in this post so that the script is installed globally (feel free to use a "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.python.org\u002F3\u002Flibrary\u002Fvenv.html",rel:[g,h,i],target:j},children:[{type:a,value:"virtualenv"}]},{type:a,value:" if you are comfortable setting that up instead):"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First, check out the "},{type:b,tag:e,props:{href:y,rel:[g,h,i],target:j},children:[{type:a,value:"repo"}]},{type:a,value:", then "},{type:b,tag:k,props:{},children:[{type:a,value:R}]},{type:a,value:" to it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then in the command line, run:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{className:[p,G]},children:[{type:a,value:"sudo"}]},{type:a,value:" pip3 "},{type:b,tag:f,props:{className:[p,G]},children:[{type:a,value:"install"}]},{type:a,value:S},{type:b,tag:f,props:{className:[p,T,U]},children:[{type:a,value:"."}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You'll know it's successful when it finishes and when you type "},{type:b,tag:k,props:{},children:[{type:a,value:"venmo2ynab --help"}]},{type:a,value:" in the CLI, you see this:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Usage: venmo2ynab "},{type:b,tag:f,props:{className:[p,v]},children:[{type:a,value:V}]},{type:a,value:"OPTIONS"},{type:b,tag:f,props:{className:[p,v]},children:[{type:a,value:W}]},{type:a,value:S},{type:b,tag:f,props:{className:[p,v]},children:[{type:a,value:V}]},{type:a,value:"INPUT_FILES"},{type:b,tag:f,props:{className:[p,v]},children:[{type:a,value:W}]},{type:b,tag:f,props:{className:[p,v]},children:[{type:a,value:".."}]},{type:a,value:". OUTPUT_FILE\n\nOptions:\n  --help  Show this message and exit.\n"}]}]}]},{type:a,value:c},{type:b,tag:z,props:{id:"using-the-script"},children:[{type:b,tag:e,props:{href:"#using-the-script",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:"Using the script"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Below I'll outline the process that I go through to get my Venmo transactions into YNAB, starting with exporting my Venmo statement from the last month to a file, then running that exported file through the script, and finally importing the "},{type:b,tag:k,props:{},children:[{type:a,value:".csv"}]},{type:a,value:" file into YNAB."}]},{type:a,value:c},{type:b,tag:t,props:{id:K},children:[{type:b,tag:e,props:{href:"#step-one-download-your-venmo-statement",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fvenmo.com\u002Faccount\u002Fsign-in",rel:[g,h,i],target:j},children:[{type:a,value:"Log into Venmo"}]},{type:a,value:", then go to your statements page:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[w]},children:[{type:a,value:c},{type:b,tag:x,props:{src:"\u002Fimages\u002Fimporting-venmo-transactions-to-ynab\u002F1-go-to-statements.png",alt:"Find Your Statements in the Venmo Sidebar"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Change the dropdown at the top of the page to \"Past 60 days\" or whatever timeframe you'd like. The page will update and you'll see the table of transactions further down reflect this time period."}]},{type:a,value:c},{type:b,tag:q,props:{className:[w]},children:[{type:a,value:c},{type:b,tag:x,props:{src:"\u002Fimages\u002Fimporting-venmo-transactions-to-ynab\u002F1-export-statement.png",alt:"Export Your Statement from Venmo"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Click the \"Download CSV\" button to download a file on to your computer with all of the transactions that you have selected with that dropdown. It'll be called "},{type:b,tag:k,props:{},children:[{type:a,value:X}]},{type:a,value:", note where it saves the file (in Mac OS, it puts it in your Downloads folder by default)."}]},{type:a,value:c},{type:b,tag:t,props:{id:M},children:[{type:b,tag:e,props:{href:"#step-two-convert-your-venmo-statement-for-ynab",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this step, you'll use "},{type:b,tag:k,props:{},children:[{type:a,value:u}]},{type:a,value:" to turn that downloaded statement to one that can be imported into YNAB. Specifically it follows \"Option 2\" in the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.youneedabudget.com\u002Farticle\u002F921-formatting-csv-file",rel:[g,h,i],target:j},children:[{type:a,value:"Formatting a CSV File help article"}]},{type:a,value:" on the YNAB website, combining inflow and outflow into one field and also preserving the payee and memo fields."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Open your terminal and locate the "},{type:b,tag:k,props:{},children:[{type:a,value:X}]},{type:a,value:" file, and change to the directory:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:k,props:{},children:[{type:a,value:"$ "},{type:b,tag:f,props:{className:[p,T,U]},children:[{type:a,value:R}]},{type:a,value:" ~\u002FDownloads\n$ "},{type:b,tag:f,props:{className:[p,G]},children:[{type:a,value:"ls"}]},{type:a,value:"\nvenmo_statement.csv\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, run "},{type:b,tag:k,props:{},children:[{type:a,value:u}]},{type:a,value:", providing the Venmo CSV as the first argument and a "},{type:b,tag:r,props:{},children:[{type:a,value:"new"}]},{type:a,value:" filename for where you want to save the YNAB-compatible CSV content:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:k,props:{},children:[{type:a,value:"venmo2ynab venmo_statement.csv to_ynab.csv\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If successful, you won't see any output. You can always open up the "},{type:b,tag:k,props:{},children:[{type:a,value:Y}]},{type:a,value:" file to make sure everything looks good. On to the final step!"}]},{type:a,value:c},{type:b,tag:t,props:{id:O},children:[{type:b,tag:e,props:{href:"#step-three-importing-transactions-into-ynab",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In "},{type:b,tag:e,props:{href:"https:\u002F\u002Fapp.youneedabudget.com",rel:[g,h,i],target:j},children:[{type:a,value:"YNAB"}]},{type:a,value:", locate your Venmo account and click the \"File Import\" button and click it. Locate your "},{type:b,tag:k,props:{},children:[{type:a,value:Y}]},{type:a,value:" file and upload it (Hint: you can also drag and drop the CSV file into YNAB when your Venmo account is selected!)"}]},{type:a,value:c},{type:b,tag:q,props:{className:[w]},children:[{type:a,value:c},{type:b,tag:x,props:{src:"\u002Fimages\u002Fimporting-venmo-transactions-to-ynab\u002F2-import-into-ynab.png",alt:"Import Your Venmo Transactions into YNAB"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You'll be able to preview what's being imported in the next window. It's always worth glancing over it and making sure that Payees and Memos line up. You don't need to change any of the options in the dialog, just click \"Import\" when you're ready!"}]},{type:a,value:c},{type:b,tag:q,props:{className:[w]},children:[{type:a,value:c},{type:b,tag:x,props:{src:"\u002Fimages\u002Fimporting-venmo-transactions-to-ynab\u002F2-preview-import.png",alt:"Preview Your Imported Venmo Transactions"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On success, YNAB will tell you how many transactions were imported, and how many were skipped. It's smart enough to skip already-imported transactions, so you can run this process as often as you'd like!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now you have new transactions to categorize and approve with all of your most recent Venmo transactions imported!"}]},{type:a,value:c},{type:b,tag:z,props:{id:"conclusion"},children:[{type:b,tag:e,props:{href:"#conclusion",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:"Conclusion"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I hope this little tool helps someone manage their budgets better with Venmo transactions. As a frequent Venmo user, keeping these transactions updated in YNAB has helped me have better control over my spending with it. If you find this useful or you have some ideas on how to make it better, hit me up on "},{type:b,tag:e,props:{href:Z,rel:[g,h,i],target:j},children:[{type:a,value:"Twitter"}]},{type:a,value:" or feel free to contribute to the "},{type:b,tag:e,props:{href:y,rel:[g,h,i],target:j},children:[{type:a,value:"GitHub project"}]},{type:a,value:" yourself (it's free to use and modify!)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ideally I'd love to automate this process even more, but it looks like the APIs needed to do that do not exist. If you have ideas on how to make this happen automatically without a lot of user interaction, please "},{type:b,tag:e,props:{href:Z,rel:[g,h,i],target:j},children:[{type:a,value:"reach out"}]},{type:a,value:"!"}]}]},dir:H,path:"\u002Farticles\u002Fimporting-venmo-transactions-to-ynab",extension:I,updatedAt:"2021-10-27T15:01:15.542Z",formattedCreatedAt:"October 25th, 2021"},{slug:"the-driverless-car-singularity",description:"Thoughts about an opinion piece in The Guardian on the unpredictability of people with self-driving cars.",title:_,tags:["tech","cars","opinion"],createdAt:"2019-02-13T00:00:00.000Z",toc:[],body:{type:E,children:[{type:b,tag:d,props:{},children:[{type:a,value:"The opinion piece "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.theguardian.com\u002Fcommentisfree\u002F2019\u002Ffeb\u002F13\u002Fthe-self-driving-car-is-a-marvel-doomed-by-unpredictable-humans",rel:[g,h,i],target:j},children:[{type:a,value:"The self-driving car is a marvel doomed by unpredictable humans"}]},{type:a,value:" got me thinking. I’m less pessimistic about the autonomous future than the author, but it brought up something I’ve thought about for a while with driverless cars and its viability\u002Fsafety on the streets. This passage highlights the main problem pretty well:"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And of course, people are often the biggest issue. Even the most complex algorithm can’t hope to match the chaotic, unpredictable, baffling behaviour of the average human. Or “pedestrian”, as they’d be considered by autonomous vehicles."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I’d extend this even further to say that "},{type:b,tag:J,props:{},children:[{type:a,value:"other drivers"}]},{type:a,value:" are also similarly chaotic and unpredictable. But I wonder if that will always be the case? Certainly as more autonomous vehicles appear on the road it’ll only become more safe, right? After all, if we remove the baffling behavior of people behind the wheel the algorithms of future vehicles can play out uninterrupted."}]},{type:a,value:c},{type:b,tag:q,props:{className:[w]},children:[{type:a,value:c},{type:b,tag:x,props:{src:"\u002Fimages\u002Fdriverless.png",alt:_},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Fewer drivers, more safety."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"My guess is that there will be a point at which driverless cars become safe  simply because there are fewer unpredictable human drivers on the road."}]}]},dir:H,path:"\u002Farticles\u002Fthe-driverless-car-singularity",extension:I,updatedAt:$,formattedCreatedAt:"February 12th, 2019"},{slug:"the-code-review-review",description:"The Meta Code Review and why you should be doing them as an engineering leader.",title:"The Code Review Review",tags:["engineering","management","code reviews"],createdAt:"2018-09-28T00:00:00.000Z",toc:[{id:aa,depth:s,text:ab},{id:ac,depth:s,text:ad},{id:ae,depth:s,text:af}],body:{type:E,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Let's talk about code reviews as a manager."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"More specifically, I want to talk about the "},{type:b,tag:r,props:{},children:[{type:a,value:"Code Review Review"}]},{type:a,value:", a.k.a The Meta Code Review. I think every Engineering Manager can benefit from reviewing their team’s code reviews. This post is how and why I do it, and why I think you should do it for your team."}]},{type:a,value:c},{type:b,tag:t,props:{id:aa},children:[{type:b,tag:e,props:{href:"#why-you-should-review-code-reviews",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Code reviews and code commenting systems are communication platforms for your team. They are where team dynamics unfold, reveal themselves, and develop. To ignore them is a mistake; a missed opportunity to gain some crucial insights about the people you manage."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I work at "},{type:b,tag:e,props:{href:"http:\u002F\u002Finvisionapp.com",rel:[g,h,i],target:j},children:[{type:a,value:"InVision"}]},{type:a,value:", a fully distributed company. Asynchronous communication is the primary way people here on the "},{type:b,tag:e,props:{href:"http:\u002F\u002Fpaulgraham.com\u002Fmakersschedule.html",rel:[g,h,i],target:j},children:[{type:a,value:"Maker Schedule"}]},{type:a,value:" get their information. Slack, email, written documentation, Github... the list goes on (and changes often). We are constantly reading and writing on these platforms. And so we’re building a culture through them. That’s why it’s so important that as a manager you are tuned into how your team is using them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"The way your team communicates asynchronously says a lot about its culture."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Code reviews are a place where engineers talk about their craft. It’s where people vent, sometimes directly and sometimes inadvertently. Relationships develop there, squabbles may start there. "},{type:b,tag:J,props:{},children:[{type:a,value:"People connect"}]},{type:a,value:" in those comment fields and communication patterns emerge. Culture is nudged and influenced from these often ignored places of team-building goodness."}]},{type:a,value:c},{type:b,tag:t,props:{id:ac},children:[{type:b,tag:e,props:{href:"#how-to-meta-review-code",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I usually spend 20-30 minutes a week going through Pull Requests that have come through to and within my team. I’m primarily looking for "},{type:b,tag:J,props:{},children:[{type:a,value:"trends in communication"}]},{type:a,value:", not reviewing the code itself. Sometimes out of curiosity and for more context I do look deeper into the code, and if that’s helpful for you do it! When I look through a code review, I ask these general questions:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"What are people saying in these reviews?"}]},{type:a,value:"\nIs it feedback about style or structure, or is it about architecture? How much do people even use this platform to communicate?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"How are they saying it?"}]},{type:a,value:"\nNote the tone and communication style. This is where I like to look at what I call “short-typer” and “long-typer” trends. Are answers short and to the point, or are they drawn out. How does that match those individuals’ in-person or verbal communication style? How much care do people put into their responses, and why?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"How is the review feedback being received?"}]},{type:a,value:"\nWho is the recipient and how are they taking this feedback? Is there a lot of back-and-forth? Are people following up within the tool, or outside of it? What are the turnaround times for their follow-up?"}]},{type:a,value:c},{type:b,tag:t,props:{id:ae},children:[{type:b,tag:e,props:{href:"#final-notes",ariaHidden:l,tabIndex:m},children:[{type:b,tag:f,props:{className:[n,o]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Code Review Review is meant to be a tool for visibility, not an auditing mechanism, for how you team works together. You know your people through regular 1:1s, how does their personality play out in these asynchronous platforms? A Code Review Review is a way to gain insight into the individuals you manage and into how your team forms its culture. So give it a try, and let me know what you think!"}]}]},dir:H,path:"\u002Farticles\u002Fthe-code-review-review",extension:I,updatedAt:$,formattedCreatedAt:"September 27th, 2018"}]}],fetch:{},mutations:void 0}}("text","element","\n","p","a","span","nofollow","noopener","noreferrer","_blank","code","true",-1,"icon","icon-link","token","div","strong",2,"h2","venmo2ynab","punctuation","centerpiece","img","https:\u002F\u002Fgithub.com\u002Fmike-douglas\u002Fvenmo2ynab","h1","nuxt-content-highlight","pre","language-bash","line-numbers","root","li","function","\u002Farticles",".md","em","step-one-download-your-venmo-statement","Step One: Download your Venmo statement","step-two-convert-your-venmo-statement-for-ynab","Step Two: Convert your Venmo statement for YNAB","step-three-importing-transactions-into-ynab","Step Three: Importing transactions into YNAB","https:\u002F\u002Fwww.youneedabudget.com\u002Fhow-to-manage-venmo-in-ynab\u002F","cd"," ","builtin","class-name","[","]","venmo_statement.csv","to_ynab.csv","https:\u002F\u002Ftwitter.com\u002Fmiked","The Driverless Car Singularity","2021-10-27T01:01:09.589Z","why-you-should-review-code-reviews","Why you should review Code Reviews","how-to-meta-review-code","How to Meta-Review Code","final-notes","Final notes")));