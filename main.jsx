import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search, MapPin, Hotel, Car, Mountain, Camera, Waves, Heart,
  Menu, X, ChevronRight, Star, CalendarDays, Users, Compass,
  Utensils, Landmark, Trees, ArrowRight, Sparkles, Clock3,
  ShieldCheck, IndianRupee, Phone, Navigation, CheckCircle2,
  ArrowLeft, Route, Sunrise, CameraIcon, BedDouble, MapPinned,
  Info, CalendarRange, MessageCircle, Share2
} from "lucide-react";
import "./styles.css";

const destinations = [
  {
    id:1,name:"Deomali",area:"Pottangi",type:"Mountain",tag:"Odisha's highest peak",rating:4.9,price:"₹1,499",days:"1–2 days",
    img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=90",
    gallery:[
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=90"
    ],
    desc:"A spectacular mountain escape with winding roads, wide valley views and unforgettable sunrise and sunset moments.",
    intro:"Deomali is the kind of place where the journey is part of the destination. Mountain roads, open skies and changing weather make it a natural highlight for a Koraput trip.",
    highlights:["Mountain sunrise","Scenic roads","Valley viewpoints","Nature photography"],
    itinerary:["Start early from your stay and travel toward Deomali.","Explore viewpoints and spend time around the mountain landscape.","Enjoy local food and a relaxed return journey before evening."],
    reach:["Best explored by private car or local cab","Carry water, light snacks and a rain layer","Start early for clearer mountain views"],
    best:"October – March",
    stay:"Homestays and hotels around Semiliguda, Sunabeda and Koraput can be used as bases."
  },
  {
    id:2,name:"Dudhari",area:"Near Semiliguda",type:"Picnic Spot",tag:"Peaceful riverside escape",rating:4.8,price:"₹899",days:"1 day",
    img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
    gallery:["https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=90"],
    desc:"A calm nature getaway, ideal for a relaxed day beside the water and surrounding greenery.",
    intro:"Dudhari is a simple, peaceful option for travellers who want a short nature escape from the Semiliguda side.",
    highlights:["Picnic day","Green surroundings","Water views","Relaxed drive"],
    itinerary:["Leave after breakfast and reach Dudhari.","Enjoy the natural surroundings and a relaxed picnic.","Return before evening and explore nearby local roads if time allows."],
    reach:["Convenient for a short local trip from Semiliguda","Check road conditions during heavy rain","Carry food and keep the place clean"],
    best:"Monsoon & winter",
    stay:"Use Semiliguda or nearby towns as your overnight base."
  },
  {
    id:3,name:"Machkund",area:"Machkund",type:"Lake & Hills",tag:"Scenic mountain landscape",rating:4.8,price:"₹1,799",days:"1–2 days",
    img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=90",
    gallery:["https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90"],
    desc:"Beautiful hills, water and winding roads create one of the region's most memorable scenic journeys.",
    intro:"Machkund brings together mountain scenery, water and long scenic drives—ideal for a slow travel weekend.",
    highlights:["Lake views","Mountain drive","Sunset stops","Photography"],
    itinerary:["Travel toward Machkund in the morning.","Explore scenic viewpoints and water-side landscapes.","Stay overnight or return depending on your starting point."],
    reach:["A car or local cab is recommended","Allow extra time for scenic stops","Keep a flexible plan during monsoon"],
    best:"October – February",
    stay:"Plan a base in the surrounding towns and confirm accommodation before travelling."
  },
  {
    id:4,name:"Onukadelli",area:"Nandapur",type:"Waterfall",tag:"Remote natural beauty",rating:4.7,price:"₹1,299",days:"1 day",
    img:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=90",
    gallery:["https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90"],
    desc:"A nature-focused destination for travellers looking for quieter roads, greenery and waterfall scenery.",
    intro:"Onukadelli is for travellers who prefer quieter natural places, forest roads and the sound of water over crowded tourist spots.",
    highlights:["Waterfall scenery","Forest landscape","Village roads","Photography"],
    itinerary:["Leave early and follow the local route toward Onukadelli.","Spend time around the waterfall and surrounding nature.","Return with daylight and avoid rushing the journey."],
    reach:["Use a local driver familiar with the route","Avoid slippery areas after heavy rain","Respect villages and natural surroundings"],
    best:"Monsoon & post-monsoon",
    stay:"Nandapur and nearby towns can be considered as bases."
  },
  {
    id:5,name:"Nandapur",area:"Nandapur",type:"Heritage",tag:"History, temples & culture",rating:4.7,price:"₹999",days:"1 day",
    img:"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=90",
    gallery:["https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1400&q=90"],
    desc:"Explore heritage, temples and the cultural landscape around historic Nandapur.",
    intro:"Nandapur offers a different side of Koraput: heritage, architecture, local traditions and the stories of an older landscape.",
    highlights:["Heritage","Temples","Local culture","Slow travel"],
    itinerary:["Begin with the main heritage locations.","Explore local markets and cultural surroundings.","Finish with a relaxed local meal before returning."],
    reach:["Comfortable as a day trip from nearby towns","Wear comfortable walking shoes","Ask locally before entering sensitive cultural spaces"],
    best:"October – March",
    stay:"Koraput, Semiliguda or nearby towns can be used as a base."
  },
  {
    id:6,name:"Putsil",area:"Koraput",type:"Viewpoint",tag:"Misty mountain roads",rating:4.9,price:"₹1,199",days:"1–2 days",
    img:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90",
    gallery:["https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=90","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=90"],
    desc:"A beautiful highland escape known for dramatic weather, mountain roads and peaceful surroundings.",
    intro:"Putsil is made for slow drives, misty weather and wide mountain views. It works especially well as part of a longer Koraput circuit.",
    highlights:["Misty views","Mountain roads","Village scenery","Sunrise photography"],
    itinerary:["Drive toward Putsil after an early breakfast.","Stop at viewpoints and village landscapes along the way.","Return slowly and enjoy the changing mountain light."],
    reach:["A local driver is useful for unfamiliar roads","Carry a jacket and rain protection","Avoid night driving on remote stretches"],
    best:"Monsoon & winter",
    stay:"Koraput and surrounding towns offer the widest choice of stays."
  }
];

const routePlaces = [
  { name:"Pottangi", type:"Town • gateway area", note:"A useful base and road stop for the Deomali side.", query:"Pottangi, Koraput, Odisha" },
  { name:"Semiliguda", type:"Town • stay & services", note:"A practical base for travellers approaching Deomali.", query:"Semiliguda, Koraput, Odisha" },
  { name:"Koraput", type:"Town • culture & stay", note:"A larger base with hotels, transport and cultural attractions.", query:"Koraput, Odisha" },
  { name:"Duduma Waterfall", type:"Waterfall • day trip", note:"A dramatic Machkund-area waterfall that can be combined into a wider circuit.", query:"Duduma Waterfall, Koraput, Odisha" },
  { name:"Kolab Dam", type:"Reservoir • viewpoint", note:"A scenic reservoir stop for photography and a relaxed lakeside break.", query:"Kolab Dam, Koraput, Odisha" },
  { name:"Nandapur", type:"Heritage • culture", note:"A heritage-focused stop for travellers building a longer Koraput circuit.", query:"Nandapur, Koraput, Odisha" }
];

const deomaliExperiences = [
  {icon:Mountain, category:"Viewpoint", title:"Deomali summit views", text:"Panoramic Eastern Ghats scenery from Odisha’s highest peak.", action:"Explore viewpoint"},
  {icon:Sunrise, category:"Sunrise & sunset", title:"Golden-hour moments", text:"Plan an early start or late-day visit for mountain light and landscape photography.", action:"Plan the timing"},
  {icon:Route, category:"Trek & hike", title:"Summit trail", text:"Deomali is promoted for trekking and hiking; conditions can change, so check locally before setting out.", action:"See trek tips"},
  {icon:CameraIcon, category:"Photography", title:"Mountain photography", text:"Capture mist, grasslands, valleys, winding roads and changing weather across the hills.", action:"Find photo spots"},
  {icon:Trees, category:"Nature & villages", title:"Slow travel around Pottangi", text:"Take your time through the surrounding countryside and respect local communities and private land.", action:"Explore the area"},
  {icon:Utensils, category:"Food", title:"Local food stop", text:"Plan food and water before heading into the hills; local options may be limited on remote stretches.", action:"Add food stop"},
  {icon:BedDouble, category:"Stay", title:"Base near Deomali", text:"Use nearby towns and confirmed accommodation as your overnight base, or check official nature-camp availability.", action:"Find a stay"},
  {icon:Car, category:"Local transport", title:"Cab & driver", text:"A local driver can make a multi-stop mountain day easier, especially when roads or weather change.", action:"Request a cab"}
];

const deomaliMap = {
  lat: 18.6751, lon: 82.9821,
  embed: "https://www.openstreetmap.org/export/embed.html?bbox=82.91%2C18.61%2C83.06%2C18.73&layer=mapnik&marker=18.6751%2C82.9821",
  link: "https://www.openstreetmap.org/?mlat=18.6751&mlon=82.9821#map=12/18.6751/82.9821"
};


const categories = [
  ["Mountain", Mountain, "Peaks & viewpoints"],["Waterfall", Waves, "Waterfalls & rivers"],["Stay", Hotel, "Hotels & homestays"],["Cab", Car, "Local taxi & travel"],["Culture", Landmark, "Heritage & traditions"],["Food", Utensils, "Local food"],["Photo", Camera, "Photo locations"],["Nature", Trees, "Forests & villages"]
];

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const destinationFromPath = () => {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return destinations.find((p) => slugify(p.name) === slug) || null;
};

function App(){
  const initialDestination = destinationFromPath();
  const [menu,setMenu]=useState(false); const [query,setQuery]=useState(""); const [active,setActive]=useState("All");
  const [liked,setLiked]=useState([]); const [page,setPage]=useState(initialDestination ? "destination" : "home"); const [selected,setSelected]=useState(initialDestination);
  const [modal,setModal]=useState(null); const [trip,setTrip]=useState({place:initialDestination?.name || "",days:"2",travellers:"2"}); const [toast,setToast]=useState("");
  const filtered=useMemo(()=>destinations.filter(p=>(active==="All"||p.type===active)&&(`${p.name} ${p.area} ${p.tag}`.toLowerCase().includes(query.toLowerCase()))),[query,active]);
  const notify=(msg)=>{setToast(msg);setTimeout(()=>setToast(""),2600)};
  const toggleLike=(id)=>setLiked(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);
  const openDestination=(p)=>{setSelected(p);setPage("destination");window.history.pushState({destination:slugify(p.name)},"",`/${slugify(p.name)}`);window.scrollTo({top:0,behavior:"smooth"})};
  const openTrip=(p)=>{setTrip({place:p?.name || "",days:"2",travellers:"2"});setModal({kind:"trip",place:p || null})};
  const goHome=()=>{setPage("home");setSelected(null);if(window.location.pathname!=="/")window.history.pushState({},"","/");window.scrollTo({top:0,behavior:"smooth"})};
  useEffect(()=>{const onPop=()=>{const p=destinationFromPath();setSelected(p);setPage(p?"destination":"home");if(p)setTrip({place:p.name,days:"2",travellers:"2"});window.scrollTo({top:0,behavior:"auto"})};window.addEventListener("popstate",onPop);return()=>window.removeEventListener("popstate",onPop)},[]);
  useEffect(()=>{const title=selected?`${selected.name} — MakeMyKoraput | Koraput, Odisha`:"MakeMyKoraput — Explore Koraput, Odisha";document.title=title;const description=selected?`Plan a trip to ${selected.name}, Koraput, Odisha — travel information, photos, videos, itinerary ideas, local stays and experiences.`:"Discover Deomali, waterfalls, hills, culture, stays and local travel experiences across Koraput, Odisha.";let tag=document.querySelector('meta[name="description"]');if(!tag){tag=document.createElement("meta");tag.name="description";document.head.appendChild(tag)}tag.setAttribute("content",description)},[selected]);
  if(page==="destination"&&selected) return <DestinationPage p={selected} liked={liked} toggleLike={toggleLike} goHome={goHome} notify={notify} openTrip={openTrip} modal={modal} setModal={setModal} trip={trip} setTrip={setTrip} />;

  return <div className="app">
    <header className="header"><div className="nav"><div className="brand" onClick={goHome}><div className="brand-mark">MK</div><div><b>MakeMy<span>Koraput</span></b><small>Explore • Stay • Experience</small></div></div>
      <nav className={menu?"nav-links open":"nav-links"}><a href="#explore" onClick={()=>setMenu(false)}>Explore</a><a href="#stays" onClick={()=>setMenu(false)}>Stays</a><a href="#travel" onClick={()=>setMenu(false)}>Cabs</a><a href="#culture" onClick={()=>setMenu(false)}>Culture</a><button className="login" onClick={()=>setModal({kind:"login"})}>Sign in</button></nav>
      <button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
    <main>
      <section className="hero"><div className="hero-overlay"/><div className="hero-content"><div className="eyebrow"><Sparkles size={15}/> KORAPUT • ODISHA</div><h1>Your Koraput story<br/><em>starts here.</em></h1><p>Discover hidden waterfalls, mountain roads, tribal culture, peaceful stays and unforgettable local experiences.</p>
        <div className="search-box"><div className="search-field"><MapPin size={20}/><div><label>Destination</label><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Where in Koraput?"/></div></div><div className="search-divider"/><div className="search-field compact"><CalendarDays size={20}/><div><label>Travel dates</label><span>Choose dates</span></div></div><div className="search-divider"/><div className="search-field compact"><Users size={20}/><div><label>Travellers</label><span>2 travellers</span></div></div><button className="search-btn" onClick={()=>document.getElementById("explore").scrollIntoView({behavior:"smooth"})}><Search size={20}/> Explore</button></div>
        <div className="trust-row"><span><ShieldCheck size={14}/> Local-first travel</span><span><CheckCircle2 size={14}/> Curated places</span><span><Phone size={14}/> Easy enquiry</span></div></div></section>
      <section className="quick-cats">{categories.map(([name,Icon,sub])=><button key={name} onClick={()=>{setActive(["Mountain","Waterfall"].includes(name)?name:"All");document.getElementById("explore").scrollIntoView({behavior:"smooth"})}}><span><Icon size={22}/></span><b>{name}</b><small>{sub}</small></button>)}</section>
      <section className="section" id="explore"><div className="section-head"><div><div className="kicker">EXPLORE KORAPUT</div><h2>Start with a place you love</h2><p>Build your own Koraput trip around real destinations and local experiences.</p></div><button className="outline" onClick={()=>setActive("All")}>View all <ArrowRight size={16}/></button></div>
        <div className="chips">{["All","Mountain","Waterfall","Picnic Spot","Lake & Hills","Heritage","Viewpoint"].map(x=><button className={active===x?"chip active":"chip"} key={x} onClick={()=>setActive(x)}>{x}</button>)}</div>
        <div className="cards">{filtered.map(p=><article className="place-card" key={p.id}><div className="image-wrap"><img src={p.img} alt={p.name}/><button className="heart" onClick={()=>toggleLike(p.id)}><Heart size={18} fill={liked.includes(p.id)?"currentColor":"none"}/></button><span className="rating"><Star size={13} fill="currentColor"/> {p.rating}</span></div><div className="card-body"><div className="muted">{p.type} • {p.area}</div><h3>{p.name}</h3><p>{p.tag}</p><div className="card-meta"><span><Clock3 size={13}/> {p.days}</span><span><IndianRupee size={13}/> from {p.price}</span></div><button className="discover" onClick={()=>openDestination(p)}>View destination <ChevronRight size={15}/></button></div></article>)}</div>
        {!filtered.length&&<div className="empty">No destination found. Try Deomali, Machkund, Nandapur or another place.</div>}
      </section>
      <section className="planner"><div className="planner-copy"><div className="kicker light">YOUR TRIP, YOUR WAY</div><h2>Plan a Koraput trip in minutes.</h2><p>Choose a destination and we'll prepare the starting point for your itinerary, stay, cab and experiences.</p><div className="planner-points"><span><CheckCircle2/> Destination</span><span><CheckCircle2/> Stay</span><span><CheckCircle2/> Local cab</span><span><CheckCircle2/> Experiences</span></div></div>
        <div className="planner-form"><label>Where are you going?</label><select value={trip.place} onChange={e=>setTrip({...trip,place:e.target.value})}><option value="">Select destination</option>{destinations.map(p=><option key={p.id}>{p.name}</option>)}</select><div className="two-input"><div><label>Days</label><select value={trip.days} onChange={e=>setTrip({...trip,days:e.target.value})}>{[1,2,3,4,5,7].map(x=><option key={x}>{x}</option>)}</select></div><div><label>Travellers</label><select value={trip.travellers} onChange={e=>setTrip({...trip,travellers:e.target.value})}>{[1,2,3,4,5,6,8,10].map(x=><option key={x}>{x}</option>)}</select></div></div><button className="primary full" onClick={()=>notify(trip.place?`Trip plan started for ${trip.place}.`:"Choose a destination first.")}>Build my trip <ArrowRight size={17}/></button></div></section>
      <section className="feature-band" id="stays"><div><div className="kicker light">STAY YOUR WAY</div><h2>Wake up closer to nature.</h2><p>Find hotels, homestays and peaceful stays around Semiliguda, Sunabeda, Koraput and beyond.</p><button className="white-btn" onClick={()=>notify("Stay marketplace is the next partner module.")}>Explore stays <ArrowRight size={17}/></button></div><div className="stay-art"><Hotel size={72}/><span>Homestay</span><span>Nature stay</span><span>Family room</span><b>Partner stays coming next</b></div></section>
      <section className="section" id="travel"><div className="section-head"><div><div className="kicker">MOVE LIKE A LOCAL</div><h2>Everything for the road</h2><p>Connect with local travel services and build your journey around Koraput.</p></div></div><div className="travel-grid"><TravelCard icon={<Car/>} title="Local Cabs" text="Point-to-point & day trips" action="Request a cab" onClick={()=>notify("Cab enquiry module selected.")}/><TravelCard icon={<Compass/>} title="Local Guides" text="Find people who know the place" action="Find a guide" onClick={()=>notify("Guide marketplace module selected.")}/><TravelCard icon={<Route/>} title="Custom Trips" text="Build a route around your time" action="Plan a route" onClick={()=>setModal({kind:"trip",place:null})}/></div></section>
      <section className="culture" id="culture"><div className="culture-copy"><div className="kicker">TRAVEL WITH RESPECT</div><h2>Travel for the story.<br/>Stay for the culture.</h2><p>Koraput is more than a landscape. Its villages, food, festivals, music, craft and traditions are part of what makes the journey special.</p><button className="dark-btn" onClick={()=>notify("Culture guide section selected.")}>Explore Koraput culture <ArrowRight size={17}/></button></div><div className="culture-quote">“Our culture is not just something we inherit. <strong>It is something we protect, live and share.</strong>”<div className="quote-tags"><span>Food</span><span>Festivals</span><span>Dhemsa</span><span>Craft</span></div></div></section>
      <section className="section how"><div className="kicker">HOW IT WORKS</div><h2>From idea to journey.</h2><div className="steps"><div className="step"><b>01</b><h3>Discover</h3><p>Find destinations, stays and experiences worth your time.</p><span><Search size={13}/> Explore places</span></div><div className="step"><b>02</b><h3>Build</h3><p>Choose days, travellers and the places you want to connect.</p><span><CalendarRange size={13}/> Shape your trip</span></div><div className="step"><b>03</b><h3>Connect</h3><p>Enquire with local stays, drivers and guides.</p><span><MessageCircle size={13}/> Send an enquiry</span></div><div className="step"><b>04</b><h3>Go</h3><p>Travel with a plan while keeping room for discovery.</p><span><Navigation size={13}/> Start travelling</span></div></div></section>
    </main><footer><div className="footer-brand"><div className="brand-mark">MK</div><div><b>MakeMyKoraput</b><small>Explore • Stay • Experience</small></div></div><div className="footer-links"><span>About</span><span>Partners</span><span>Help</span><span>Contact</span></div><span>© 2026 MakeMyKoraput</span></footer>
    {modal&&<Modal modal={modal} setModal={setModal} trip={trip} setTrip={setTrip} notify={notify} />}{toast&&<div className="toast"><CheckCircle2 size={17}/>{toast}</div>}
  </div>;
}

function TravelCard({icon,title,text,action,onClick}){return <button className="travel-card" onClick={onClick}><span className="icon-box">{icon}</span><span><h3>{title}</h3><p>{text}</p><small>{action}</small></span><ChevronRight/></button>}

function DestinationPage({p,liked,toggleLike,goHome,notify,openTrip,modal,setModal,trip,setTrip}){
  const [photo,setPhoto]=useState(0);
  return <div className="app destination-app">
    <header className="header"><div className="nav"><div className="brand" onClick={goHome}><div className="brand-mark">MK</div><div><b>MakeMy<span>Koraput</span></b><small>Explore • Stay • Experience</small></div></div><nav className="nav-links destination-nav"><button onClick={goHome}>Explore</button><button onClick={()=>setModal({kind:"login"})}>Sign in</button></nav><button className="menu-btn"><Menu/></button></div></header>
    <main>
      <div className="destination-topbar"><button className="back-btn" onClick={goHome}><ArrowLeft size={17}/> Back to Koraput</button><div className="top-actions"><button onClick={()=>toggleLike(p.id)}><Heart size={17} fill={liked.includes(p.id)?"currentColor":"none"}/> {liked.includes(p.id)?"Saved":"Save"}</button><button onClick={()=>notify("Share link copied in the full version.")}><Share2 size={17}/> Share</button></div></div>
      <section className="destination-hero"><div className="destination-gallery"><div className="gallery-main"><img src={p.gallery[photo]} alt={p.name}/><span className="gallery-count"><CameraIcon size={14}/> {photo+1}/{p.gallery.length}</span></div><div className="gallery-thumbs">{p.gallery.map((g,i)=><button key={g} className={photo===i?"thumb active":"thumb"} onClick={()=>setPhoto(i)}><img src={g} alt=""/></button>)}</div></div>
        <div className="destination-intro"><div className="eyebrow dark"><Mountain size={15}/> {p.type} • {p.area}</div><h1>{p.name}</h1><p className="lead">{p.desc}</p><div className="destination-rating"><span><Star size={16} fill="currentColor"/> {p.rating}</span><span>Excellent destination</span><span><MapPin size={15}/> Koraput, Odisha</span></div><div className="price-box"><div><small>Starting trip estimate</small><strong>{p.price}</strong><span>per traveller • indicative</span></div><button className="primary" onClick={()=>openTrip(p)}>Plan this trip <ArrowRight size={17}/></button></div></div>
      </section>
      <section className="destination-content"><div className="destination-main"><section className="content-block"><div className="kicker">ABOUT {p.name.toUpperCase()}</div><h2>Why visit {p.name}?</h2><p>{p.intro}</p></section>
        <section className="highlight-grid">{p.highlights.map((x,i)=>{const HighlightIcon=[Mountain,Sunrise,CameraIcon,Trees][i%4]; return <div className="highlight" key={x}><span><HighlightIcon size={20}/></span><b>{x}</b><small>Worth adding to your trip</small></div>})}</section>
        <section className="content-block"><div className="kicker">SUGGESTED PLAN</div><h2>A simple {p.days} itinerary</h2><div className="timeline">{p.itinerary.map((x,i)=><div className="timeline-row" key={x}><span>{i+1}</span><div><b>{["Start","Explore","Return"][i]||"Experience"}</b><p>{x}</p></div></div>)}</div></section>
        {p.id===1&&<section className="content-block route-explorer"><div className="kicker">EXPLORE AROUND DEOMALI</div><h2>Places to add to your route.</h2><p>Build a bigger Koraput journey by combining Deomali with towns, viewpoints, waterfalls and cultural stops. Distances and road conditions can change, so confirm your route before travelling.</p><div className="map-card"><div className="map-head"><div><b>Deomali area map</b><span>Deomali • Pottangi • Koraput region</span></div><a href={deomaliMap.link} target="_blank" rel="noreferrer">Open full map <ArrowRight size={14}/></a></div><iframe className="route-map" title="Map of Deomali, Koraput" src={deomaliMap.embed} loading="lazy"></iframe></div><div className="route-grid">{routePlaces.map(place=><article className="route-place" key={place.name}><div className="route-place-icon"><MapPinned size={19}/></div><div><span>{place.type}</span><h3>{place.name}</h3><p>{place.note}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`} target="_blank" rel="noreferrer">Directions <ArrowRight size={13}/></a></div></article>)}</div></section>}
        {p.id===1&&<section className="content-block experience-explorer"><div className="kicker">DEOMALI EXPERIENCES</div><h2>Build your Deomali day around what you love.</h2><p>Choose the experiences that fit your trip. These are planning categories, not guaranteed services or bookings yet.</p><div className="experience-grid">{deomaliExperiences.map((item)=>{const Icon=item.icon; return <article className="experience-card" key={item.title}><div className="experience-icon"><Icon size={20}/></div><span>{item.category}</span><h3>{item.title}</h3><p>{item.text}</p><button onClick={()=>notify(`${item.title} added to your Deomali planning list.`)}>{item.action} <ArrowRight size={13}/></button></article>})}</div></section>}
        {p.id===1&&<section className="content-block review-preview"><div className="kicker">TRAVELLER FEEDBACK</div><div className="review-heading"><div><h2>What visitors can share.</h2><p>Real reviews will be added after the community and account system goes live.</p></div><button className="outline" onClick={()=>notify("Reviews will be available after the community module is connected.")}>Write a review <ArrowRight size={14}/></button></div><div className="review-grid"><article><div className="review-stars">★★★★★</div><p>“A future MakeMyKoraput review will appear here after verified traveller submissions.”</p><span>Community review • Coming soon</span></article><article><div className="review-stars">★★★★★</div><p>“We will show recent visitor experiences, trip dates and helpful travel tips here.”</p><span>Traveller insights • Coming soon</span></article></div></section>}
        <section className="content-block community-section"><div className="kicker">COMMUNITY & MEDIA</div><h2>See {p.name} through travellers' eyes.</h2><p>Discover public travel videos and trusted information while keeping credit and links with the original creator or source.</p><div className="media-grid">{p.name === "Deomali" ? <><article className="media-card"><div className="video-frame"><iframe src="https://www.youtube.com/embed/Oo6VXI4OWGU" title="Koraput travel vlog with Deomali trek" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div><div className="media-body"><span className="media-source">YouTube • Asish Ansuman</span><h3>Koraput travel vlog — Deomali trek</h3><p>A public travel vlog featuring a Deomali trek and other Koraput attractions.</p><a href="https://www.youtube.com/watch?v=Oo6VXI4OWGU" target="_blank" rel="noopener noreferrer">Watch original video <ArrowRight size={14}/></a></div></article><article className="media-card"><div className="video-frame"><iframe src="https://www.youtube.com/embed/_9P_k-7E3A8" title="Koraput Odisha detailed travel vlog with Deomali" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div><div className="media-body"><span className="media-source">YouTube • Dr. Subham Meher</span><h3>Koraput Odisha — Deomali travel vlog</h3><p>A public travel vlog showing Deomali and the wider Koraput landscape.</p><a href="https://www.youtube.com/watch?v=_9P_k-7E3A8" target="_blank" rel="noopener noreferrer">Watch original video <ArrowRight size={14}/></a></div></article><article className="media-card official-media"><div className="official-icon"><Landmark size={30}/></div><div className="media-body"><span className="media-source">Official source • Odisha Tourism</span><h3>Deomali Hills information</h3><p>Official destination information, activities, access and visitor details.</p><a href="https://odishatourism.gov.in/w/deomali-hills" target="_blank" rel="noopener noreferrer">Open official source <ArrowRight size={14}/></a></div></article></> : <><article className="media-card official-media"><div className="official-icon"><Landmark size={30}/></div><div className="media-body"><span className="media-source">Community media</span><h3>Share your {p.name} story</h3><p>Submit your public video or photo link and we’ll review it before featuring it.</p><button className="outline" onClick={()=>notify("Creator submission is the next community module.")}>Submit a post <ArrowRight size={14}/></button></div></article><article className="media-card official-media"><div className="official-icon"><CameraIcon size={30}/></div><div className="media-body"><span className="media-source">Original-source policy</span><h3>Credit stays with the creator</h3><p>MakeMyKoraput will link to public originals or use official embeds rather than reposting copyrighted media without permission.</p><a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(p.name+" Koraput travel")}`} target="_blank" rel="noopener noreferrer">Find public travel videos <ArrowRight size={14}/></a></div></article></>}</div></section>
        <section className="content-block"><div className="kicker">TRAVEL TIPS</div><h2>Before you go</h2><div className="tips">{p.reach.map(x=><div key={x}><CheckCircle2 size={18}/><span>{x}</span></div>)}</div></section>
      </div><aside className="destination-side"><div className="side-card"><div className="side-icon"><Sunrise/></div><small>BEST TIME</small><h3>{p.best}</h3><p>Weather can change quickly in the hills. Keep your plan flexible.</p></div><div className="side-card"><div className="side-icon"><BedDouble/></div><small>WHERE TO STAY</small><h3>Plan your base</h3><p>{p.stay}</p><button className="outline full-outline" onClick={()=>notify("Stay search is the next marketplace module.")}>Explore stays <ArrowRight size={15}/></button></div><div className="side-card"><div className="side-icon"><Car/></div><small>GET AROUND</small><h3>Local cab</h3><p>Request a local driver for a day trip or multi-stop route.</p><button className="primary full" onClick={()=>notify("Cab enquiry started.")}>Request a cab <ArrowRight size={15}/></button></div></aside></section>
      <section className="destination-cta"><div><div className="kicker light">READY TO GO?</div><h2>Build your {p.name} trip.</h2><p>Choose your days and travellers. We'll turn this destination into a practical starting itinerary.</p></div><button className="white-btn" onClick={()=>openTrip(p)}>Plan {p.name} <ArrowRight size={17}/></button></section>
    </main><footer><div className="footer-brand"><div className="brand-mark">MK</div><div><b>MakeMyKoraput</b><small>Explore • Stay • Experience</small></div></div><span>© 2026 MakeMyKoraput</span></footer>
    {modal&&<Modal modal={modal} setModal={setModal} trip={trip} setTrip={setTrip} notify={notify} />}
  </div>
}

function Modal({modal,setModal,trip,setTrip,notify}){
  if(modal.kind==="login") return <div className="modal-bg" onClick={()=>setModal(null)}><div className="modal small-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setModal(null)}><X/></button><div className="modal-content"><div className="kicker">MAKEMYKORAPUT ACCOUNT</div><h2>Save your journeys.</h2><p>Sign-in is ready as a product entry point. We can connect real authentication next.</p><input className="modal-input" placeholder="Email address"/><button className="primary full" onClick={()=>{setModal(null);notify("Sign-in flow selected. Authentication comes next.")}}>Continue <ArrowRight size={17}/></button></div></div></div>;
  return <div className="modal-bg" onClick={()=>setModal(null)}><div className="modal small-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setModal(null)}><X/></button><div className="modal-content"><div className="kicker">BUILD YOUR TRIP</div><h2>{trip.place?`Plan ${trip.place}`:"Plan your Koraput trip"}</h2><p>Set your basic trip details. This is the first step toward connecting stays, cabs and experiences.</p><label className="modal-label">Destination</label><select className="modal-input" value={trip.place} onChange={e=>setTrip({...trip,place:e.target.value})}><option value="">Select destination</option>{destinations.map(p=><option key={p.id}>{p.name}</option>)}</select><div className="two-input"><div><label className="modal-label">Days</label><select className="modal-input" value={trip.days} onChange={e=>setTrip({...trip,days:e.target.value})}>{[1,2,3,4,5,7].map(x=><option key={x}>{x}</option>)}</select></div><div><label className="modal-label">Travellers</label><select className="modal-input" value={trip.travellers} onChange={e=>setTrip({...trip,travellers:e.target.value})}>{[1,2,3,4,5,6,8,10].map(x=><option key={x}>{x}</option>)}</select></div></div><button className="primary full" onClick={()=>{setModal(null);notify(trip.place?`Your ${trip.place} trip has been started.`:"Choose a destination first.")}}>Start planning <ArrowRight size={17}/></button></div></div></div>
}

createRoot(document.getElementById("root")).render(<App/>);
