export default function TabBar({
  tabs,

  activeTab,
  setActiveTab,

  addTab,
  reorderTabs,
  

}) {

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("tabIndex", index); };


const handleDrop = (e, index) => {
 const fromIndex = e.dataTransfer.getData("tabIndex");
 reorderTabs(Number(fromIndex), index);

  };




  return ( <div className="tab-bar">
{tabs.map((tab, index) => ( <div


  key={tab.id}
  className={`tab ${activeTab === tab.id ? "active" : ""}`}
  draggable

  onDragStart={(e) => handleDragStart(e, index)}
  onDragOver={(e) => e.preventDefault()}


onDrop={(e) => handleDrop(e, index)}
onClick={() => setActiveTab(tab.id)}
>



{tab.title} </div>
))}

<button className="add-tab" onClick={addTab}>+</button> </div>
  );

}

