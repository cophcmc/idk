var boxes = document.getElementsByClassName("box")
var info = document.getElementById("info")
var infotext = document.getElementById("info-text")
var infoarray = {
    0:"create 1",
    1:"For the Thinker, the examined life is truly the only one worth living. Ever the perpetual student, you experience the world as an endless opportunity for learning, discovery, and truth-seeking.Driven by an insatiable intellectual curiosity, the THINKER makes the quest for knowledge and truth a lifelong pursuit. With all those big questions and abstract thinking, you’ve got some serious electrical activity going on in that brain of yours! Few things satisfy your inquisitive mind more than a well-formulated question or an elegant solution, and you’re content to spend much of your time alone, studying topics that fascinate you and engaging with your inner world of ideas.Your greatest gifts are your sense of wonder and depth of perception. You can see the big picture and the deeper meaning of almost any situation in a way that few others can. Your biggest challenges? Getting out of your head and learning to balance theory with practice. Try not to get too caught up in concepts and abstractions, dear THINKER. Great ideas are meant to be brought to life.Seek out the company of ADVENTURER types, who provide the perfect counterbalance to your introspective and analytical nature. The infectious energy and playful spirit of the ADVENTURER remind you to embrace the joys of creation—and to not be afraid to get your hands a little dirty in the process.",
    2:"create 3",
    3:"create 4",
    4:"create 5",
    5:"create 6",
    6:"create 7",
    7:"create 8"
}

for(let i=0;i<boxes.length;i++){
    
    boxes[i].addEventListener("click",()=>{
        info.style.visibility = "visible"
        infotext.innerText = infoarray[i]
    })
}

info.addEventListener("click",()=>{
    info.style.visibility = "hidden"
})