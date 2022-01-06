const DOMListSorter = {
    sort(domList){
        const items = Array.prototype.filter.call(domList.childNodes, 
            (item) => {
                return item.nodeType === 1;
            }).sort((item1, item2) => {
                return item1.textContent.localeCompare(item2.textContent);
            });

        while(domList.firstChild){
            domList.removeChild(domList.firstChild);
        }

        items.forEach((item) => {
            domList.appendChild(item);
        });
    }
}