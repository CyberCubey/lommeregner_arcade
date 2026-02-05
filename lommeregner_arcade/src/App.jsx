import { useState } from "react";
import TabBar from "./components/tabs";

import CalculatorTab from "./components/calculatortabs";

import "./App.css";




export default function App ( ){
const [tabs, setTabs] = useState(() => {

 const saved = localStorage.getItem("calc-tabby");
 return saved ? JSON.parse(saved): [{ id: 1, title: "Calc 1", }];


});

const [activeTab, setActiveTab] = useState( tabs[0]?.id ?? null
);
const addTab = () => { const newId = Date.now();
  setTabs([...tabs, { id:newId,title: `Calc ${tabs.length + 1}` }]);
  setActiveTab(newId); };



const reorderTabs = (fromIndex, toIndex) => {
  const updated = [...tabs];
  const [moved] = updated.splice(fromIndex, 1);

updated.splice(toIndex, 0, moved); setTabs(updated);
};




return ( <div className="app-container">
<TabBar

  tabs={tabs}
  activeTab={activeTab}
  setActiveTab={setActiveTab}

  addTab={addTab}
  reorderTabs={reorderTabs} />



<div className="tab-content"> {tabs.map((tab) =>
  tab.id === activeTab ? (
<CalculatorTab key={tab.id} /> ) : null


)}
</div> </div>
  );

}
