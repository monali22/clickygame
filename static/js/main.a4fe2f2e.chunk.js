(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),s=a.n(o),c=a(4),r=a(5),l=a(7),m=a(6),u=a(8);a(15);var g=function(e){return i.a.createElement("div",{className:"divsionImages"},i.a.createElement("img",{src:e.image,alt:e.name,className:"img",onClick:function(){return e.removeFriend(e.id)}}))};a(16);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(17);var d=function(e){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},e.title),i.a.createElement("p",{className:"lead"},e.subtitle),i.a.createElement("p",null,"Score:",i.a.createElement("span",null,e.score)),i.a.createElement("p",null,"Top Score:",i.a.createElement("span",null,e.topScore)),i.a.createElement("p",null,e.message)))},h=a(1),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:h,Score:0,topScore:0,list:[],message:""},a.removeFriend=function(e){a.state.friends.map(function(t){t.id===e&&(-1===a.state.list.indexOf(t)?(a.state.list.push(t),a.setState({list:a.state.list}),console.log(a.state.list),a.setState({Score:a.state.Score+1}),console.log(a.state.Score),a.setState({message:"You guessed Correctly"})):(console.log("Ohhhh"),a.state.topScore<a.state.Score&&a.setState({topScore:a.state.Score}),a.setState({message:"You guessed Incorrectly"}),a.state.list=[],a.setState({list:a.state.list}),a.setState({list:a.state.list}),a.setState({Score:0})))}),a.shuffle(a.state.friends),a.setState({friends:h})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"shuffle",value:function(e){e.sort(function(){return Math.random()-.5})}},{key:"componentDidMount",value:function(){this.setState({message:"Click an Image to begin"})}},{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(d,{title:"CLICKY GAME",subtitle:"Click on an image to earn points, but don't click on any more than once!",score:this.state.Score,topScore:this.state.topScore,message:this.state.message}),this.state.friends.map(function(t){return i.a.createElement(g,{removeFriend:e.removeFriend,id:t.id,key:t.id,image:t.image})}))}}]),t}(n.Component);a(18);s.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a4fe2f2e.chunk.js.map