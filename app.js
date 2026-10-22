const content={crew:{label:'FOR THE CREW',title:'Your next job<br>starts here.',description:"Your next credit starts with your next job. FilmMeet is being built to help you discover crew openings, connect with production teams, and put your experience in front of the people hiring.",features:[['Get in front of the people hiring','Show production teams your skills, credits, and portfolio so they can see what you bring to their next project.'],['Find your next crew job','Explore crew openings across film, television, commercials, and digital production—all in one place.'],['Turn connections into your next call','Meet the producers and crew who could bring you onto your next set—and the one after that.']]},production:{label:'FOR PRODUCTION',title:'The right people.<br>For your next production.',description:"From the first call to the final wrap, your crew makes the difference. FilmMeet is being built to help production teams find professionals who fit the work.",features:[['Find the skills your project needs','Explore professional crew profiles by role, experience, and location.'],['Put the opportunity in the right place','Share crew positions with a community built around production work.'],['Build your network for the next one','Keep discovering collaborators beyond your existing contacts.']]},investors:{label:'FOR INVESTORS',title:'A connected industry.<br>A bigger possibility.',description:'FilmMeet is building a dedicated hiring and professional networking platform for the people behind film, television, commercial, and digital production.',features:[['A fragmented process','Crew hiring often lives across text threads, social groups, spreadsheets, and word of mouth.'],['One focused platform','Bring searchable professional profiles, crew jobs, and industry connections together.'],['A city-first approach','Start with the Los Angeles independent production community, learn from the pilot, and build toward expansion.']]}};
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab){const c=content[tab.dataset.audience];tabs.forEach(t=>{const active=t===tab;t.classList.toggle('active',active);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1});document.getElementById('audience-panel').setAttribute('aria-labelledby',tab.id);document.getElementById('panel-label').textContent=c.label;document.getElementById('panel-title').innerHTML=c.title;document.getElementById('panel-description').textContent=c.description;document.getElementById('panel-features').innerHTML=c.features.map(([title,description],i)=>`<article><span>0${i+1}</span><div><h4>${title}</h4><p>${description}</p></div></article>`).join('');}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next=index;if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectTab(tabs[next]);tabs[next].focus();});});

const heroVideo=document.getElementById('hero-video');
const videoToggle=document.querySelector('.video-toggle');
if(heroVideo&&videoToggle){
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  heroVideo.muted=true;
  const updateVideoButton=()=>{videoToggle.textContent=heroVideo.paused?'Play video':'Pause video';};
  heroVideo.addEventListener('play',updateVideoButton);
  heroVideo.addEventListener('pause',updateVideoButton);
  heroVideo.addEventListener('error',()=>{videoToggle.hidden=true;});
  videoToggle.hidden=false;
  videoToggle.addEventListener('click',()=>{if(heroVideo.paused){heroVideo.play().catch(updateVideoButton);}else{heroVideo.pause();}});
  const applyMotionPreference=()=>{if(reducedMotion.matches){heroVideo.autoplay=false;heroVideo.pause();}else{heroVideo.autoplay=true;heroVideo.play().catch(updateVideoButton);}updateVideoButton();};
  reducedMotion.addEventListener('change',applyMotionPreference);
  applyMotionPreference();
}

// Add the demo URL here when it is ready.
const FILMMEET_DEMO_URL = './demo/';
const investorDemo = document.getElementById('investor-demo');
if (investorDemo && FILMMEET_DEMO_URL) {
  investorDemo.disabled = false;
  investorDemo.addEventListener('click', () => { window.location.href = FILMMEET_DEMO_URL; });
}
