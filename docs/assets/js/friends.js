const friends=[{avatar:"assets/images/friends/friend-01.jpg",name:"Ahmed Nasser",jobTitle:"JavaScript Developer",friendsCount:99,projectsCount:15,articlesCount:25,joinDate:"02/10/2021",isVIP:!0},{avatar:"assets/images/friends/friend-02.jpg",name:"Omar Fathy",jobTitle:"Cloud Developer",friendsCount:30,projectsCount:11,articlesCount:12,joinDate:"02/08/2020",isVIP:!1},{avatar:"assets/images/friends/friend-03.jpg",name:"Omar Ahmed",jobTitle:"Mobile Developer",friendsCount:80,projectsCount:20,articlesCount:18,joinDate:"02/06/2020",isVIP:!1},{avatar:"assets/images/friends/friend-04.jpg",name:"Shady Nabil",jobTitle:"Back-End Developer",friendsCount:70,projectsCount:30,articlesCount:18,joinDate:"28/06/2020",isVIP:!1},{avatar:"assets/images/friends/friend-05.jpg",name:"Mohamed Ibrahim",jobTitle:"Algorithm Developer",friendsCount:80,projectsCount:30,articlesCount:18,joinDate:"28/08/2020",isVIP:!1},{avatar:"assets/images/friends/friend-01.jpg",name:"Amr Hendawy",jobTitle:"Back-End Developer",friendsCount:70,projectsCount:30,articlesCount:18,joinDate:"28/06/2020",isVIP:!1},{avatar:"assets/images/friends/friend-02.jpg",name:"Mahmoud Adel",jobTitle:"Cloud Developer",friendsCount:30,projectsCount:11,articlesCount:12,joinDate:"02/08/2020",isVIP:!1},{avatar:"assets/images/friends/friend-03.jpg",name:"Ahmed Abuzaid",jobTitle:"Content Creator",friendsCount:80,projectsCount:30,articlesCount:18,joinDate:"28/08/2020",isVIP:!0},{avatar:"assets/images/friends/friend-04.jpg",name:"Gareeb Elshiekh",jobTitle:"JavaScript Developer",friendsCount:90,projectsCount:15,articlesCount:25,joinDate:"02/10/2020",isVIP:!0},{avatar:"assets/images/friends/friend-05.jpg",name:"Hamza",jobTitle:"Front-End Developer",friendsCount:80,projectsCount:20,articlesCount:18,joinDate:"02/06/2020",isVIP:!1}];function appendElementToGrid(e,t,a,n,i,s,r,d){var o=document.createElement("article"),d=(d&&o.classList.add("vip"),document.createElement("div")),l=(d.classList.add("buttons"),document.createElement("i")),l=(l.classList.add("fa-solid","fa-phone"),d.appendChild(l),document.createElement("i")),l=(l.classList.add("fa-regular","fa-envelope"),d.appendChild(l),o.appendChild(d),document.createElement("div")),d=(l.classList.add("row","title"),document.createElement("img")),e=(d.setAttribute("src",e),l.appendChild(d),document.createElement("h4")),d=(e.textContent=t,l.appendChild(e),document.createElement("span")),t=(d.textContent=a,l.appendChild(d),o.appendChild(l),document.createElement("div")),e=(t.classList.add("row"),document.createElement("span")),a=(e.innerHTML=`<i class="fa-regular fa-face-smile"></i> ${n} Friends`,t.appendChild(e),document.createElement("span")),d=(a.innerHTML=`<i class="fa-solid fa-code-commit"></i> ${i} Projects`,t.appendChild(a),document.createElement("span")),l=(d.innerHTML=`<i class="fa-regular fa-newspaper"></i> ${s} Articles`,t.appendChild(d),o.appendChild(t),document.createElement("div")),n=(l.classList.add("row"),o.appendChild(l),document.createElement("span")),e=(n.textContent="Joined "+r,l.appendChild(n),document.createElement("div")),i=(e.classList.add("links"),document.createElement("a")),a=(i.classList.add("profile","btn","bg-blue"),i.setAttribute("href","profile.html"),i.textContent="Profile",e.appendChild(i),document.createElement("a"));a.classList.add("remove","btn","bg-red"),a.setAttribute("href","#"),a.textContent="Remove",e.appendChild(a),l.appendChild(e),document.querySelector(".grid").appendChild(o)}friends.forEach(e=>{appendElementToGrid(e.avatar,e.name,e.jobTitle,e.friendsCount,e.projectsCount,e.articlesCount,e.joinDate,e.isVIP)});