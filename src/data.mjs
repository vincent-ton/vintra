// Created independently for this demonstration. No imported or anonymized records.
export const AS_OF='2025-09-30';
export function createDemo(){
 const accounts=[
  {id:'checking',name:'Everyday checking',institution:'Capital One',type:'cash',opening:670000},
  {id:'savings',name:'Short-term savings',institution:'Capital One',type:'cash',opening:320000},
  {id:'yield',name:'Emergency reserve',institution:'Marcus',type:'cash',opening:1480000},
  {id:'card',name:'Everyday card',institution:'Discover',type:'liability',opening:52000},
  {id:'invest',name:'Flexible investments',institution:'Schwab',type:'investment',opening:75000},
  {id:'retire',name:'Workplace retirement',institution:'Schwab',type:'retirement',opening:42000}
 ];
 const securities=[
  {id:'vus',symbol:'ITOT',name:'iShares Core S&P Total U.S. Stock Market ETF',kind:'fund',asset:'US stocks',price:'132.40',color:'#194B3E'},
  {id:'vint',symbol:'IXUS',name:'iShares Core MSCI Total International Stock ETF',kind:'fund',asset:'International stocks',price:'80.00',color:'#5F8A77'},
  {id:'vbnd',symbol:'AGG',name:'iShares Core U.S. Aggregate Bond ETF',kind:'fund',asset:'Bonds',price:'100.00',color:'#A2B4A9'},
  {id:'vreal',symbol:'USRT',name:'iShares Core U.S. REIT ETF',kind:'fund',asset:'Real assets',price:'60.00',color:'#BAA780'},
  {id:'visa',symbol:'V',name:'Visa Inc.',kind:'stock',asset:'US stocks',price:'331.00',color:'#194B3E'}
 ];
 const holdings=[
  {id:'h1',account:'invest',security:'vus',quantity:'160',basis:1800000},
  {id:'h2',account:'invest',security:'vint',quantity:'145.8',basis:1080000},
  {id:'h3',account:'invest',security:'vbnd',quantity:'118.8',basis:1230000},
  {id:'h4',account:'retire',security:'vus',quantity:'410',basis:4480000},
  {id:'h5',account:'retire',security:'vint',quantity:'218.7',basis:1520000},
  {id:'h6',account:'retire',security:'vbnd',quantity:'166.32',basis:1720000},
  {id:'h7',account:'retire',security:'vreal',quantity:'95.4',basis:610000},
  {id:'h8',account:'invest',security:'visa',quantity:'5',basis:150000}
 ];
 const categories=['Housing','Groceries','Dining','Transport','Utilities','Insurance','Subscriptions','Shopping','Travel'];
 const budget={Housing:180000,Groceries:44000,Dining:38000,Transport:18000,Utilities:19000,Insurance:13000,Subscriptions:6000,Shopping:25000,Travel:30000};
 const transactions=[];let n=0,debt=52000;
 const add=(date,account,merchant,amount,kind,category='',recurring=false)=>{transactions.push({id:'tx-'+(++n),date,account,merchant,amount,kind,category,recurring,note:'Recorded activity'});};
 const pair=(date,from,to,amount,kind,merchant)=>{add(date,from,merchant,-amount,kind);add(date,to,merchant,amount,kind);};
 for(let i=0;i<8;i++){
  const month='2025-'+String(i+2).padStart(2,'0'),day=d=>month+'-'+String(d).padStart(2,'0');
  add(day(1),'checking','Payroll deposit',310000,'income','Pay',true);add(day(15),'checking','Payroll deposit',310000,'income','Pay',true);
  add(day(2),'checking','AvalonBay · Rent',-180000,'expense','Housing',true);
  add(day(6),'checking','Duke Energy',-(17000+i*170),'expense','Utilities',true);
  add(day(8),'checking','GEICO',-12000,'expense','Insurance',true);
  let charged=0;
  const charge=(cat,merchant,amount,d,recurring=false)=>{if(amount){add(day(d),'card',merchant,-amount,'expense',cat,recurring);charged+=amount;}};
  const spread=(cat,total,merchants,weights,days)=>{let used=0;merchants.forEach((merchant,j)=>{const amount=j===merchants.length-1?total-used:Math.floor(total*weights[j]/100);used+=amount;charge(cat,merchant,amount,days[j]);});};
  spread('Groceries',40500+i*600,["Trader Joe's",'Kroger','ALDI',"Trader Joe's"],[28,25,22,25],[4,11,18,24]);
  spread('Dining',i===7?59600:28400+i*1300,['Sweetgreen','Chipotle','CAVA','The Cheesecake Factory','Panera Bread','Olive Garden','Starbucks','Shake Shack','CAVA','Chipotle'],[8,7,10,13,9,14,6,8,13,12],[3,5,7,9,11,13,15,18,21,24]);
  spread('Transport',14800,['Uber','Lyft','Uber','Lyft'],[35,22,28,15],[6,12,19,23]);
  charge('Subscriptions','Spotify',1200,14,true);charge('Subscriptions','YouTube Premium',1400,17,true);charge('Subscriptions','Adobe',i>4?3800:2600,21,true);
  spread('Shopping',i===7?32900:16500+i*700,['Target','IKEA'],[60,40],[17,21]);
  charge('Travel','Marriott',[0,18000,0,32000,0,47000,0,24000][i],20);
  const refund=i===7?4900:0;if(refund)add(day(22),'card','Target · Return',refund,'refund','Shopping');
  const payment=debt+charged-refund-(i===7?43000:0);pair(day(26),'checking','card',payment,'repayment','Card repayment');debt=i===7?43000:0;
  pair(day(16),'checking','yield',40000,'transfer','Reserve transfer');
  pair(day(18),'checking','invest',25000,'contribution','Investment contribution');
  pair(day(18),'checking','retire',45000,'contribution','Retirement contribution');
  add(day(28),'invest','Cash distribution',2400+i*90,'dividend');add(day(28),'retire','Cash distribution',5500+i*110,'dividend');
 }
 const goals=[
  {id:'g1',name:'Emergency reserve',purpose:'Cash buffer for essential bills and unexpected expenses.',target:1800000,allocated:1800000,monthly:0,months:12,account:'yield'},
  {id:'g2',name:'New chapter fund',purpose:'Relocation: moving costs, a rental deposit and furnishing a new home.',target:900000,allocated:240000,monthly:35000,months:24,account:'savings'},
  {id:'g3',name:'Learning sabbatical',purpose:'An eight-week study break: course fees and living costs while away from work.',target:600000,allocated:60000,monthly:20000,months:18,account:'savings'}
 ];
 return {version:1,asOf:AS_OF,profile:'Personal workspace',age:32,accounts,securities,holdings,categories,budget,transactions,goals,assumptions:{years:10,monthlyExtra:0,returnBps:600,inflationBps:250,incomeChange:0,expenseChange:0,purchase:0,retireAge:62},selectedMonth:'2025-09'};
}
export const months=Array.from({length:8},(_,i)=>'2025-'+String(i+2).padStart(2,'0'));
export const priceFactors={vus:[8800,9100,9000,9500,9600,9800,10200,10000],vint:[9300,9500,9700,9600,9900,10100,10050,10000],vbnd:[9700,9750,9850,9900,10000,9950,10020,10000],visa:[8900,9200,9100,9450,9750,9900,10200,10000],vreal:[9200,9250,9400,9600,9700,9800,9950,10000]};
