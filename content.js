



// Auto Attack Function
function autoAttack() {
  const arenacont = document.getElementById('cooldown_bar_arena');
  const button2 = arenacont ? arenacont.querySelector('.cooldown_bar_link') : null;
  const element2 = arenacont.querySelector('#cooldown_bar_text_arena');

  const expcont = document.getElementById('cooldown_bar_expedition');
  const button = expcont ? expcont.querySelector('.cooldown_bar_link') : null;
  let element = document.querySelector('#cooldown_bar_text_expedition');
  const btn = document.querySelector('.expedition_button');
  const duncont = document.getElementById('cooldown_bar_dungeon');
  const button1 = duncont ? duncont.querySelector('.cooldown_bar_link') : null;
  const element1 = duncont.querySelector('#cooldown_bar_text_dungeon');
  if(btn)btn.click();
  if (element && element.textContent === 'Go to expedition'&& !btn) {
    
    button.click();
    const btncl =document.querySelector('.expedition_button');
    btncl.click();
    }
    else if(element1 && element1.textContent.trim() === 'Go to dungeon'){
   
    // Check if the href of the link matches the current page URL
    
          setTimeout(button1.click(),100);
          const enterdungeon = document.querySelector('[value="Normal"]');
          if (enterdungeon) setTimeout(enterdungeon.click(),100);;
          const button11 = document.querySelector('img[onclick*="startFight"]');
          if (button11) {
              setTimeout(button11.click(),100);
     
    }
  

     }else if (element2 && element2.textContent.trim() === 'Go to the arena') {
     button2.click();
  setTimeout(1);
  const attack = document.querySelector('.attack');
  if(attack) attack.click();
  setTimeout(attack.click(),100);
    }else{

    
  const circuscont = document.getElementById('cooldown_bar_ct');
     const button3 = circuscont ? circuscont.querySelector('.cooldown_bar_link') : null;
     const element3 = document.getElementById('cooldown_bar_text_ct');
     const test = document.getElementById('cooldown_bar_fill_ready');
    
if ((element3 && element3.textContent.trim() === 'To Circus Turma')||(test)) {
     if(button3) setTimeout(button3.click(),100);
  const attack1 = document.querySelector('.attack');
  if(attack1) setTimeout(attack1.click(),100);
     }
  
}}

// Auto Sell Function
function autoheal(){
  const health = document.querySelector('#header_values_hp_bar');
  if (health.getAttribute('data-value')<5000){
    const Overview = document.querySelector('[title="Overview"]');
    if (!(Overview.classList.contains('active'))) {
  
      Overview.click();
      }
      const cel = document.querySelector('[style="top:5px" ]');
      if(cel){
        if(!cel.classList.contains('active')) cel.click();
      }

    const bag = document.querySelector('[data-bag-number="514"]');
    
    var isShadowed = bag.getAttribute('data-item-shadowed');
    if (isShadowed !== 'true') {
    setTimeout(bag.click(),50);
    }
    // Select all elements with data-content-type="64"
const heal = document.querySelector('[data-content-type="64"]');

// Filter the elements based on the data-vitality attribute

console.log(heal);
// Click on the first matching element (if any)
if ((heal)&&(health.getAttribute('data-value')<5000)) {
  const dblClickEvent = new MouseEvent('dblclick', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  const health1 = document.querySelector('#header_values_hp_bar');
  if(health1.getAttribute('datavalue')<5000) heal.dispatchEvent(dblClickEvent);

  // Dispatch the double-click event
  

}

   

  }
  
}
function autoRestartQuests(){
  var restart = document.querySelector('.quest_slot_button_restart');
  const btn = document.querySelector('[title="Pantheon"]');
  var element = document.getElementById('QuestTime');
  check = element.querySelector('[color="red"]');


  // Compare the text content to "FULL"
  if (!(btn.classList.contains('active'))&&check) {
btn.click();
}
  console.log(restart);
  if(restart)  {
   
      setTimeout(restart.click(),100);
    setTimeout(restart = document.querySelector('.quest_slot_button_restart'),102);

  }
}
function autoquest(){
  var element = document.getElementById('QuestTime');
  var check = null;
  var btn = document.querySelector('[title="Pantheon"]');
   check = element.querySelector('[color="red"]');
  var check1 = element.querySelector('[color="yellow"]');
  var check2 = btn.querySelector('[color="green"]');
  
// Check if the element exists to avoid errors
if (((check1)&&!(check))||(check2)||(btn.classList.contains('active'))) {
    // Get the text content of the element
    
    const anchorElement = document.querySelector('a.awesome-tabs.current');

// Check if the anchor element exists
if (anchorElement) {
  // Get the href attribute of the anchor element


  // Compare the current URL with the link's href
  if (!btn.classList.contains('active')||check2) {
  
  btn.click();
  }}
  let btn2 = document.querySelector('[title="End quest"]');
  while(btn2){
    btn2.click();
    btn2 = document.querySelector('[title="End quest"]');
  }
  
  const arenacat = document.querySelector('#qcategory_arena');
  const garenacat = document.querySelector('#qcategory_grouparena');
  const combacat = document.querySelector('#qcategory_combat');

  const arenaslot = arenacat.querySelector('.contentboard_slot');
  if(arenaslot) var arenaquest = arenaslot.querySelector('.quest_slot_button_accept');
  const garenaslot = garenacat.querySelector('.contentboard_slot ');

  if(garenaslot) var garenaquest = garenaslot.querySelector('.quest_slot_button_accept');
  const combaslot = combacat.querySelector('.contentboard_slot');
  if(combaslot) var  combaquest = combaslot.querySelector('.quest_slot_button_accept');
  
  const acceptQuestButton = document.querySelector('.quest_slot_button_accept');
  if (arenaquest||garenaquest||combaquest) {
    if (acceptQuestButton) acceptQuestButton.click();
    console.log('Quest accepted!');
  }else{
    const NewQuest = document.querySelector('[value="New quests"]');
    if(NewQuest) NewQuest.click();
  }
  
  


}}

function autoTrain(){
  const golddiv = document.querySelector('#sstat_gold_val');

 if (golddiv) {
  const gold = golddiv.innerHTML;

if(gold.trim()>160.000){
  const targetUrl = 'index.php?mod=training&sh=377272ed5c0c811c7a47d9989deb81c9';

  // Get the current URL
  const currentUrl = window.location.href;
  
  // Check if the current URL matches the target URL
  if (!currentUrl.includes(targetUrl)) {
  const menu = document.querySelectorAll('.menuitem');
  menu.forEach(element => {
    console.log(element);
    if(element.innerHTML.trim() === 'Training') element.click();
    
  });
  
  }
  const tester = document.querySelector('[title="You don`t have enough gold!"]');

  if(!tester){
    const dex = document.querySelector('#char_f1_tt');
  
    if(dex) {const dexcont = dex.parentElement;
        
    const trainlink = dexcont.querySelector('.training_link');
    const train = trainlink.querySelector('.training_button');
    if(train) setTimeout(train.click(),100);}

  }
  

}}
}

// Automation Starter
function startAutoClicking() {
  console.log("Auto-clicking started...");
  setInterval(autoAttack, 1000);
  setInterval(autoquest, 2000);
  setInterval(autoheal, 3000);
  setInterval(autoTrain,3500);
  setInterval(autoRestartQuests,10000);
  
 
}

// Listen for a message from popup.js to start automation

window.onload= startAutoClicking;

