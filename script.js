const DATA = [
{n:"WASHTANK Laundry Self Service",a:"Jl. Nusa Indah No.130, Condongcatur",k:"Depok",p:null,r:5.0,rv:34,lat:-7.7586645,lng:110.4084783,g:"https://www.google.com/maps/place/?q=place_id:ChIJEweZZABZei4RTqBb3JVMcWA"},
{n:"Papicilo Laundry Koin Express",a:"Jl. Kaliurang No.18, Manggung, Caturtunggal",k:"Depok",p:"+62 821-3113-6100",r:4.9,rv:769,lat:-7.7592904,lng:110.38149,g:"https://www.google.com/maps/place/?q=place_id:ChIJwWc_h_dZei4RQguk301cedo"},
{n:"Laundry Express Jogja 2 Jam (Self Service, Wahid Hasyim)",a:"Jl. Wahid Hasyim No.171c, Ngropoh, Condongcatur",k:"Depok",p:"+62 815-9033-337",r:4.8,rv:148,lat:-7.760152,lng:110.4038667,g:"https://www.google.com/maps/place/?q=place_id:ChIJy-DtKwBZei4RXuKcrl-NkfM"},
{n:"KoomBahYah Laundry Space",a:"Jl. Tantular No.397, Pringwulung, Condongcatur",k:"Depok",p:"+62 819-4746-1134",r:5.0,rv:224,lat:-7.7691569,lng:110.3956899,g:"https://www.google.com/maps/place/?q=place_id:ChIJkfKUmZFZei4RS2Ct6mgP6RI"},
{n:'Laundry "KOIN" Sejam Nologaten',a:"Jl. Nologaten, Caturtunggal",k:"Depok",p:"+62 852-3007-3749",r:4.6,rv:246,lat:-7.7797745,lng:110.4001393,g:"https://www.google.com/maps/place/?q=place_id:ChIJC-TbNNdZei4RVfz1K-PtEhM"},
{n:"Laundry Gejayan (Laundry Coin)",a:"Jl. Anggajaya 1, Sanggrahan, Condongcatur",k:"Depok",p:"+62 812-1580-3800",r:4.5,rv:156,lat:-7.7554055,lng:110.3965321,g:"https://www.google.com/maps/place/?q=place_id:ChIJIfkd06BZei4RY89ejq2DLJg"},
{n:"366 COIN LONDRY",a:"Jl. Perumnas No.19, Dabag, Condongcatur",k:"Depok",p:"+62 812-6386-7742",r:4.1,rv:276,lat:-7.7694831,lng:110.4052464,g:"https://www.google.com/maps/place/?q=place_id:ChIJ6SJpHpNZei4RH20gtge6y30"},
{n:"Wazfun Laundry Studio (Kaliurang)",a:"Jl. Kaliurang No.32, Manggung, Caturtunggal",k:"Depok",p:null,r:4.7,rv:487,lat:-7.7549236,lng:110.3829678,g:"https://www.google.com/maps/place/?q=place_id:ChIJeZ2AJn9Zei4Rqc1iGzoqYMs"},
{n:"WashWuzz Laundry Coin",a:"Jl. Nusa Indah No.248, Dero, Condongcatur",k:"Depok",p:"+62 812-2562-1881",r:4.3,rv:92,lat:-7.7513936,lng:110.4114155,g:"https://www.google.com/maps/place/?q=place_id:ChIJUyeLvZNZei4RuiUpBn-435E"},
{n:"Smart Laundry - Self Service or Drop Off",a:"Jl. Nologaten No.216, Caturtunggal",k:"Depok",p:"+62 812-3336-3092",r:4.8,rv:210,lat:-7.7773649,lng:110.4006246,g:"https://www.google.com/maps/place/?q=place_id:ChIJKwwdoqZZei4RFFCsBCdj73o"},
{n:"MR Laundry Self Service",a:"Jl. Selokan Mataram, Kaliwaru, Condongcatur",k:"Depok",p:"+62 882-1258-5283",r:5.0,rv:29,lat:-7.7676535,lng:110.3985476,g:"https://www.google.com/maps/place/?q=place_id:ChIJ9dHRiphZei4R5RPrh_w6E8M"},
{n:"Self Laundry Mainwash",a:"Jl. Anggajaya 2 No.245, Sanggrahan, Condongcatur",k:"Depok",p:"+62 858-9252-0751",r:5.0,rv:36,lat:-7.7563822,lng:110.3979471,g:"https://www.google.com/maps/place/?q=place_id:ChIJCzV7CF1Zei4R7Na94fRii9Y"},
{n:"Royale Laundry Express Maguwo (Self Service)",a:"Jl. Raya Kadisoka-Tajem, Maguwoharjo",k:"Depok",p:"+62 857-1288-3992",r:5.0,rv:33,lat:-7.7531639,lng:110.440033,g:"https://www.google.com/maps/place/?q=place_id:ChIJefMJ-JRbei4RXJFCSjELidE"},
{n:"Brilliant Self Service Laundry",a:"Jl. Tasura No.60, Pugeran, Maguwoharjo",k:"Depok",p:null,r:5.0,rv:17,lat:-7.7601989,lng:110.4227790,g:"https://www.google.com/maps/place/?q=place_id:ChIJPWKubwBZei4Rt6YcdQhHhRE"},
{n:"Laundry Express Jogja / Smile Laundry (Self Service)",a:"Komplek Ruko Delima, Sanggrahan, Condongcatur",k:"Depok",p:"+62 823-2498-2780",r:4.9,rv:45,lat:-7.7548575,lng:110.40297,g:"https://www.google.com/maps/place/?q=place_id:ChIJcc2PXdRZei4RqiWPAa5dQSA"},
{n:"WCLEAN LAUNDRY SELF SERVICE",a:"Jl. P. Diponegoro, Sembego, Maguwoharjo",k:"Depok",p:"+62 851-9107-8905",r:4.6,rv:36,lat:-7.761929,lng:110.4393581,g:"https://www.google.com/maps/place/?q=place_id:ChIJqdoFagBbei4RhzUGtBxWon0"},
{n:"MOSHA LAUNDRY (Self Service)",a:"Jl. Asem Gede No.17, Gempol, Condongcatur",k:"Depok",p:"+62 823-1449-3211",r:4.9,rv:29,lat:-7.7502209,lng:110.4037159,g:"https://www.google.com/maps/place/?q=place_id:ChIJuSfWjFtZei4RJUfz052oqJ0"},
{n:"Smart Laundry - Self Service Gejayan",a:"Gg. Hortensia No.7A, Karang Gayam, Caturtunggal",k:"Depok",p:"+62 822-2092-7898",r:4.5,rv:226,lat:-7.7688374,lng:110.3894998,g:"https://www.google.com/maps/place/?q=place_id:ChIJV0mGHexZei4RtKI7ITJkeO8"},
{n:"Laundry 90 Menit Gito Gati (Self Service)",a:"Jl. Gito Gati Ruko No.1, Penen, Donoharjo",k:"Ngaglik",p:"+62 823-2564-3594",r:4.8,rv:323,lat:-7.7188926,lng:110.3737628,g:"https://www.google.com/maps/place/?q=place_id:ChIJnWHX6gdZei4RF_3e0NwVbaA"},
{n:"Laundry 90 Menit Haryadi (Self Service)",a:"Jl. Kapten Haryadi No.60, Lojajar, Sinduharjo",k:"Ngaglik",p:"+62 823-2564-3594",r:4.8,rv:90,lat:-7.7215957,lng:110.3866168,g:"https://www.google.com/maps/place/?q=place_id:ChIJAQ7rUgBZei4Reffpo5UHPCs"},
{n:"Alfawwaz Laundry (Self Service dan Full Service)",a:"Jl. Gito Gati, Rejodani 2, Sariharjo",k:"Ngaglik",p:"+62 856-0150-2187",r:5.0,rv:21,lat:-7.7206479,lng:110.3785105,g:"https://www.google.com/maps/place/?q=place_id:ChIJl6TUHABZei4R1QKH6Yywxbo"},
{n:"Laundry 90 Menit Damai (Self Service)",a:"Jl. Damai No.5, Tambakan, Sinduharjo",k:"Ngaglik",p:"+62 823-2564-3594",r:4.9,rv:66,lat:-7.7341781,lng:110.3939111,g:"https://www.google.com/maps/place/?q=place_id:ChIJqVesetJZei4Rjc0GgII8Ngo"},
{n:"RUMAH PENATU (coin laundry space+)",a:"Jl. Palagan Tentara Pelajar No.86B, Sariharjo",k:"Ngaglik",p:"+62 878-6867-5661",r:4.7,rv:74,lat:-7.7457092,lng:110.3732642,g:"https://www.google.com/maps/place/?q=place_id:ChIJMdlVbopZei4RjJpJYEMxgv0"},
{n:"Klinbox Coin Laundry Express Palagan2",a:"Jl. Palagan Tentara Pelajar No.55, Sariharjo",k:"Ngaglik",p:null,r:3.2,rv:69,lat:-7.7449374,lng:110.373708,g:"https://www.google.com/maps/place/?q=place_id:ChIJR8YYl_5Zei4RzQe9279S0BY"},
{n:"Betiga Laundry: Self Service Laundry",a:"Jl. Umbul Permai, Lojajar, Sinduharjo",k:"Ngaglik",p:"+62 821-1991-353",r:4.9,rv:19,lat:-7.72204,lng:110.3862679,g:"https://www.google.com/maps/place/?q=place_id:ChIJ32CwQwBZei4RpRTMHJE3XKg"},
{n:"Laundry Lebaran Tetap Buka (Self Service, dll)",a:"Jl. Kaliurang Km 7.8, Ngabean Kulon, Sinduharjo",k:"Ngaglik",p:"+62 812-1527-3717",r:4.9,rv:34,lat:-7.7399482,lng:110.3920172,g:"https://www.google.com/maps/place/?q=place_id:ChIJY8qARtZZei4RMGgYIPRIpgI"},
{n:"SIIP SELF SERVICE LAUNDRY PANDANARAN",a:"Candi Winangun, Sardonoharjo",k:"Ngaglik",p:null,r:5.0,rv:6,lat:-7.7025589,lng:110.4104391,g:"https://www.google.com/maps/place/?q=place_id:ChIJKaR5GQBfei4Rhoy3-BeWHdI"},
{n:"Lazwaz Laundry - Jakal UII (Self Service)",a:"Jl. Kaliurang KM 12, Candirejo, Sardonoharjo",k:"Ngaglik",p:"+62 877-7752-9074",r:5.0,rv:77,lat:-7.7001283,lng:110.4153563,g:"https://www.google.com/maps/place/?q=place_id:ChIJjW6hryZfei4Rqq5UYq-xcMA"},
{n:"WHOOSH CLEAN LAUNDRY - BESI",a:"Jl. Besi Jangkang No.06, Candi Karang, Sardonoharjo",k:"Ngaglik",p:"+62 851-6155-4245",r:5.0,rv:22,lat:-7.7008439,lng:110.4159098,g:"https://www.google.com/maps/place/?q=place_id:ChIJc14hUhlfei4R7FwrhbWQV8s"},
{n:"Laundry Hub Express Gitogati (Self Service)",a:"Jl. Gito Gati, Rejodani 2, Sariharjo",k:"Ngaglik",p:"+62 857-0769-4307",r:4.9,rv:41,lat:-7.7205903,lng:110.3815275,g:"https://www.google.com/maps/place/?q=place_id:ChIJlU2e3fpZei4RxLczfksVvFc"},
{n:"MaBestie Laundry (Self Service)",a:"Jl. Kebon Agung, Cebongan Lor, Tlogoadi",k:"Mlati",p:"+62 812-2876-3030",r:5.0,rv:116,lat:-7.7329736,lng:110.3359838,g:"https://www.google.com/maps/place/?q=place_id:ChIJlVxmKWZZei4RPoNaU4PMEcQ"},
{n:"Posko Laundry Self Service",a:"Jl. Selokan Mataram, Kutu Dukuh, Sinduadi",k:"Mlati",p:"+62 838-4959-6987",r:5.0,rv:50,lat:-7.7619537,lng:110.3658218,g:"https://www.google.com/maps/place/?q=place_id:ChIJBaN3eCFZei4RXI1vF0syGHc"},
{n:"HOKI WASH LAUNDRY SELF SERVICE",a:"Jl. Kutu Asem No.11234, Sinduadi",k:"Mlati",p:"+62 877-1666-0633",r:4.9,rv:36,lat:-7.7597321,lng:110.3595080,g:"https://www.google.com/maps/place/?q=place_id:ChIJzdJSSgBZei4RDpz4l3etBks"},
{n:"Laundry Hub Express Jogja (24 Jam Self Service)",a:"Jl. Jatirejo No.34, Jongke Tengah, Sendangadi",k:"Mlati",p:"+62 821-4725-9291",r:4.7,rv:123,lat:-7.7360185,lng:110.3684403,g:"https://www.google.com/maps/place/?q=place_id:ChIJ7fwsVP1Zei4RcI55p1KIwuI"},
{n:"Siip Self Service Laundry Cebongan",a:"Jl. Kebon Agung No.4, Tlogoadi",k:"Mlati",p:null,r:3.0,rv:77,lat:-7.7319963,lng:110.3342399,g:"https://www.google.com/maps/place/?q=place_id:ChIJC6zTQABZei4RKL_aguIiU9E"},
{n:"BUBBLE BOX Self Service Laundry",a:"Jl. Kebon Agung, Kranggahan I, Trihanggo",k:"Gamping",p:"+62 851-8814-5544",r:5.0,rv:24,lat:-7.7382431,lng:110.3527468,g:"https://www.google.com/maps/place/?q=place_id:ChIJ90wEYgBZei4RXSYWS0zZK1E"},
{n:"Softouch Laundry Selfcare Balecatur 24 Jam",a:"Jl. Yogyakarta - Wates No.45, Balecatur",k:"Gamping",p:"+62 819-9310-0200",r:5.0,rv:79,lat:-7.8052059,lng:110.2997773,g:"https://www.google.com/maps/place/?q=place_id:ChIJW34k77z5ei4RgBiuuD_Mbrs"},
{n:"Laundry Express 72 Menit / GUM Ngelondri Gamping (Self Service)",a:"Jl. Patukan No.1, Banyuraden",k:"Gamping",p:"+62 815-8255-565",r:4.8,rv:92,lat:-7.7993,lng:110.3280953,g:"https://www.google.com/maps/place/?q=place_id:ChIJLWzNPQD5ei4RML-2qfnY17M"},
{n:"Siip Self Service Laundry Nogotirto",a:"Jl. Godean Jl. Kajor KM 4.5, Kwarasan, Nogotirto",k:"Gamping",p:null,r:4.2,rv:45,lat:-7.7800882,lng:110.3457238,g:"https://www.google.com/maps/place/?q=place_id:ChIJOVZTBABZei4R__w8b8_brpc"},
{n:"Cozy Clean Self Service Laundry",a:"Ruko Sidoarum 7, Jl. Ngapak-Kentheng No.5",k:"Godean",p:null,r:4.7,rv:62,lat:-7.7754644,lng:110.3252877,g:"https://www.google.com/maps/place/?q=place_id:ChIJgZLhQwD3ei4RznYsgQcv_6E"},
{n:"Wazfun Laundry Studio Munggur Godean",a:"Jl. Godean No.km.7, Bantulan, Sidoarum",k:"Godean",p:null,r:4.7,rv:155,lat:-7.7741647,lng:110.3187367,g:"https://www.google.com/maps/place/?q=place_id:ChIJTwE0VQD3ei4Rs0XFkWLCYbE"},
{n:"Siip laundry godean (Self Service)",a:"Jl. Ngapak-Kentheng KM.8, Klajuran, Sidokarto",k:"Godean",p:"+62 837-0280-6285",r:3.2,rv:64,lat:-7.7710352,lng:110.3069511,g:"https://www.google.com/maps/place/?q=place_id:ChIJdRcalzT3ei4RUV3otmCb-Qw"},
{n:"Waz.in Laundry Jogja",a:"Jl. Ngapak-Kentheng No.4-1, Sidomoyo",k:"Godean",p:"+62 822-3334-3488",r:4.9,rv:219,lat:-7.7735317,lng:110.3158749,g:"https://www.google.com/maps/place/?q=place_id:ChIJLR_fOwD3ei4R1b0ao6b0Sik"},
{n:"Siip Self Service Laundry Bantulan",a:"Jl. Ngapak-Kentheng, Bantulan, Sidoarum",k:"Godean",p:null,r:3.8,rv:30,lat:-7.7741732,lng:110.3196541,g:"https://www.google.com/maps/place/?q=place_id:ChIJKU8RKgD3ei4R9murZv2TWtw"},
{n:"Siip Self Service Sidoarum",a:"Jl. Sidoarum-Gamping No.47, Kramat",k:"Godean",p:null,r:3.9,rv:24,lat:-7.7820119,lng:110.32303,g:"https://www.google.com/maps/place/?q=place_id:ChIJL5v5UQD3ei4RwL8-X_9rftE"},
{n:"10K Self Service Laundry Munggur",a:"Jl. Ngapak-Kentheng, Cokro Gedok, Sidoarum",k:"Godean",p:"+62 896-9949-8529",r:3.5,rv:26,lat:-7.7741359,lng:110.3185781,g:"https://www.google.com/maps/place/?q=place_id:ChIJd7LJAgD3ei4R_4eXqFVGEqo"},
{n:"Laundry Express Damai Clean Gito Gati (Self Service)",a:"Jl. Gito Gati No.1, Grojogan, Pandowoharjo",k:"Sleman",p:"+62 897-7713-733",r:5.0,rv:15,lat:-7.7193412,lng:110.3686917,g:"https://www.google.com/maps/place/?q=place_id:ChIJTSNxIABZei4RUhQdeeWQ8Pc"},
{n:"Washpresso Self Service Laundry",a:"Jl. Kaliurang Jl. Degolan KM 15, Umbulmartani",k:"Ngemplak",p:"+62 815-6825-0981",r:5.0,rv:7,lat:-7.6840521,lng:110.4182908,g:"https://www.google.com/maps/place/?q=place_id:ChIJoVRdOrFfei4RfV7Vv17EqNk"},
{n:"Wazfun Laundry Studio UII Jakal",a:"Jl. Kaliurang Jl. Degolan No.25, Umbulmartani",k:"Ngemplak",p:null,r:4.7,rv:188,lat:-7.6854599,lng:110.4191820,g:"https://www.google.com/maps/place/?q=place_id:ChIJoR5PuTJfei4R37X4t_oWu24"},
{n:"BloomWash self service laundry",a:"Jl. Balong-Degolan, Bulus II, Candibinangun",k:"Pakem",p:"+62 823-2802-9903",r:null,rv:null,lat:-7.6794161,lng:110.3986584,g:"https://www.google.com/maps/place/?q=place_id:ChIJmSOeCohfei4RENe-VEUtssc"},
{n:"Laundry 90 Menit Purwomartani (Self Service)",a:"Jl. Purwomartani No.12, Bromonilan",k:"Kalasan",p:"+62 823-2564-3594",r:4.9,rv:358,lat:-7.7506365,lng:110.4488943,g:"https://www.google.com/maps/place/?q=place_id:ChIJCS3CrrFbei4RmIs1EbCmRXU"},
{n:"LONDRETA LAUNDRY SELF SERVICE",a:"Bromonilan, Purwomartani",k:"Kalasan",p:"+62 889-5883-672",r:3.7,rv:24,lat:-7.7452639,lng:110.4499444,g:"https://www.google.com/maps/place/?q=place_id:ChIJU_DfPwBbei4RsfzEzlk8Qog"},
{n:"Hayuka Laundry (Self Service & Full Service)",a:"Jl. Sambisari No.17, Kadirojo I, Purwomartani",k:"Kalasan",p:"+62 811-8000-5515",r:4.9,rv:29,lat:-7.7715199,lng:110.4450701,g:"https://www.google.com/maps/place/?q=place_id:ChIJZQLIpXdbei4RhiQ8rFNXJ0Y"},
{n:"LONDRETA SELF SERVICE SEYEGAN",a:"Terwilen, Jl. Kebon Agung KM.10, Margodadi",k:"Seyegan",p:"+62 889-9195-5586",r:4.4,rv:7,lat:-7.7221865,lng:110.3078852,g:"https://www.google.com/maps/place/?q=place_id:ChIJCUindgD3ei4R9FxOOM3gQzk"},
{n:"Self Service Laundry SIIP (Seyegan)",a:"Jl. Kebon Agung KM 8, Kasuran Wetan, Margomulyo",k:"Seyegan",p:null,r:3.7,rv:9,lat:-7.7231117,lng:110.3096667,g:"https://www.google.com/maps/place/?q=place_id:ChIJtb53LAD3ei4RLiSibia3Tf4"},
{n:"Mampir Laundry Self Service",a:"Semampir Wetan, Tambakrejo",k:"Tempel",p:"+62 895-0181-6269",r:5.0,rv:30,lat:-7.6872425,lng:110.2988981,g:"https://www.google.com/maps/place/?q=place_id:ChIJWeUxDAD1ei4R5hWmp6Io54A"},
{n:"Royale Laundry & Setrika Express Berbah (Self Services)",a:"Samping BRI, Jl. Raya Berbah, Tegaltirto",k:"Berbah",p:"+62 857-1288-3992",r:4.6,rv:9,lat:-7.8044766,lng:110.4434401,g:"https://www.google.com/maps/place/?q=place_id:ChIJs6N53ORRei4RAfDN1vGwH6o"},
{n:"Laundry Tepat Cabang Berbah (Self Service)",a:"Jl. Berbah-Krikilan, Tegaltirto",k:"Berbah",p:"+62 882-1629-7371",r:4.5,rv:30,lat:-7.8044888,lng:110.4416753,g:"https://www.google.com/maps/place/?q=place_id:ChIJlcVy5yjzLm8RVfQ5uxX9kPg"},
{n:"Laundry Express Heha Berbah (Self Service)",a:"Jl. Berbah-Krikilan No.2a, Krikilan, Tegaltirto",k:"Berbah",p:"+62 897-9555-010",r:4.7,rv:10,lat:-7.8043693,lng:110.4402089,g:"https://www.google.com/maps/place/?q=place_id:ChIJ2co0gwdRei4RGGka6okBxTA"}
];

/* ---------- STATE ---------- */
let activeKapanewon = new Set();   // empty = show all
let searchTerm = "";
let selectedIdx = null;
const markers = [];

/* ---------- MAP INIT ---------- */
const map = L.map('map', { zoomControl:true }).setView([-7.735, 110.375], 11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution:'&copy; OpenStreetMap &copy; CARTO',
  subdomains:'abcd', maxZoom:19
}).addTo(map);

const pinSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><circle cx="12" cy="12" r="7"/><path d="M12 8.5a3.5 3.5 0 0 0-3.5 3.5"/></svg>`;

function makeIcon(active){
  return L.divIcon({
    className:'',
    html:`<div class="laundry-pin${active?' active':''}">${pinSVG}</div>`,
    iconSize:[26,26], iconAnchor:[13,13], popupAnchor:[0,-14]
  });
}

DATA.forEach((d,i)=>{
  const m = L.marker([d.lat, d.lng], { icon: makeIcon(false) }).addTo(map);
  m.bindPopup(popupHTML(d));
  m.on('click', ()=> selectItem(i, false));
  markers.push(m);
});

function popupHTML(d){
  const ratingStr = d.r ? `★ ${d.r.toFixed(1)} <span style="color:var(--muted)">(${d.rv} ulasan)</span>` : 'Belum ada rating';
  const phoneStr = d.p ? `<a href="tel:${d.p.replace(/\s/g,'')}" style="color:var(--suds-dark);text-decoration:none;">${d.p}</a>` : '—';
  return `
    <div class="pop-badge">${d.k}</div>
    <p class="pop-name">${d.n}</p>
    <p class="pop-addr">${d.a}</p>
    <p class="pop-row">📞 ${phoneStr}</p>
    <p class="pop-row">${ratingStr}</p>
    <a class="pop-link" href="${d.g}" target="_blank" rel="noopener">Buka rute di Google Maps →</a>
  `;
}

/* ---------- SIDEBAR: CHIPS ---------- */
const kapCounts = {};
DATA.forEach(d=> kapCounts[d.k] = (kapCounts[d.k]||0)+1 );
const kapList = Object.keys(kapCounts).sort((a,b)=> kapCounts[b]-kapCounts[a]);

const chipsEl = document.getElementById('chips');
const allChip = document.createElement('div');
allChip.className = 'chip all active';
allChip.textContent = `Semua (${DATA.length})`;
allChip.onclick = ()=>{ activeKapanewon.clear(); render(); };
chipsEl.appendChild(allChip);

kapList.forEach(k=>{
  const c = document.createElement('div');
  c.className = 'chip';
  c.textContent = `${k} (${kapCounts[k]})`;
  c.onclick = ()=>{
    if(activeKapanewon.has(k)) activeKapanewon.delete(k);
    else activeKapanewon.add(k);
    render();
  };
  c.dataset.k = k;
  chipsEl.appendChild(c);
});

document.getElementById('search').addEventListener('input', e=>{
  searchTerm = e.target.value.trim().toLowerCase();
  render();
});

/* ---------- STATS (computed once) ---------- */
document.getElementById('statTotal').textContent = DATA.length;
document.getElementById('statKapanewon').textContent = kapList.length;
const rated = DATA.filter(d=>d.r);
const avgR = (rated.reduce((s,d)=>s+d.r,0)/rated.length).toFixed(2);
document.getElementById('statRating').textContent = avgR;

/* ---------- FILTER + RENDER LIST ---------- */
function matches(d){
  const kOk = activeKapanewon.size===0 || activeKapanewon.has(d.k);
  const sOk = !searchTerm || d.n.toLowerCase().includes(searchTerm) || d.a.toLowerCase().includes(searchTerm);
  return kOk && sOk;
}

function render(){
  // chips visual state
  document.querySelectorAll('.chip:not(.all)').forEach(c=>{
    c.classList.toggle('active', activeKapanewon.has(c.dataset.k));
  });
  allChip.classList.toggle('active', activeKapanewon.size===0);

  const listEl = document.getElementById('list');
  listEl.innerHTML = '';
  let count = 0;

  DATA.forEach((d,i)=>{
    const ok = matches(d);
    markers[i].setOpacity(ok ? 1 : 0);
    if(markers[i]._icon) markers[i]._icon.style.pointerEvents = ok ? 'auto' : 'none';
    if(!ok) return;
    count++;

    const card = document.createElement('div');
    card.className = 'card' + (i===selectedIdx ? ' selected' : '');
    card.innerHTML = `
      <div class="card-top">
        <div class="card-name">${d.n}</div>
        <div class="rating ${d.r? '':'na'}">${d.r? '★ '+d.r.toFixed(1) : '—'}</div>
      </div>
      <div class="card-addr">${d.a}</div>
      <div class="card-meta"><span class="badge">${d.k}</span></div>
    `;
    card.onclick = ()=> selectItem(i, true);
    card.dataset.idx = i;
    listEl.appendChild(card);
  });

  document.getElementById('resCount').textContent = count;
  if(count===0){
    listEl.innerHTML = `<div class="empty">Tidak ada laundry yang cocok.<br>Coba ubah kata kunci atau filter kapanewon.</div>`;
  }
}

function selectItem(i, flyMap){
  selectedIdx = i;
  markers.forEach((m,idx)=> m.setIcon(makeIcon(idx===i)));
  markers[i].openPopup();
  if(flyMap) map.flyTo(markers[i].getLatLng(), 15, { duration:0.6 });
  document.querySelectorAll('.card').forEach(c=>{
    c.classList.toggle('selected', Number(c.dataset.idx)===i);
  });
  const sel = document.querySelector('.card.selected');
  if(sel) sel.scrollIntoView({block:'nearest', behavior:'smooth'});
}

render();
