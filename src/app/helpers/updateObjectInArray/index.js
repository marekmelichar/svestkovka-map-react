export default function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        // if(item.swType !== action.swType) {
        // console.log('item !== action', item, action);
        if(item.name !== action.name) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        // console.log('item, action', item, action);
        return {
            ...item,
            ...action
        };
    });
}
