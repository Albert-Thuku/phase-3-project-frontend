import React, {useState} from "react";

function Categories({data, onCategorySelect}){

    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    data.forEach((destination)=>{
        if(!categoryList.includes(destination.category)){
            setCategoryList([...categoryList, destination.category])
        }
    })

    function handleCategorySelect(category){
        if(category){
            onCategorySelect(category)
            setSelectedCategory(category)
        }else{
            onCategorySelect(null)
            setSelectedCategory(null)
        }
    }

    return(
        <>
            <button onClick={() => handleCategorySelect(null)}>All</button>
            {categoryList.map((category)=>{
                return (
                    <button 
                        onClick={() => handleCategorySelect(category)} 
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                );
            })}
        </>
    );
}

export default Categories;