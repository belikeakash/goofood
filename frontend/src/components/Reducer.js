export const reducer = (state, action) => {
    switch (action.type) { //if(action.type==="ADD") { }
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            //console.log(action.id);
            //arr.find((food, index) => {
                //console.log(food.id);
                // if (food.id === action.id) {
                //     console.log(food.id);
                //     console.log(food.qty, parseInt(action.qty), action.price + food.price)
                //     arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                // }
            //})
                for(let i=0;i<arr.length;i++) {
                    // console.log(arr[i]);
                    if(arr[i].id===action.id) {
                        arr[i] = { ...arr[i], qty: parseInt(action.qty) + parseInt(arr[i].qty), price: parseInt(action.price) + arr[i].price }
                    }
                }
                
                return arr
            return arr
        default:
            console.log("Error in Reducer");
    }
}