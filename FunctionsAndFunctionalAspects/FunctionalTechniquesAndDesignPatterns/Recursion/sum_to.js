const sum_to = (max_number, sum, current_number) => {
    if(current_number != max_number){
        sum += current_number;
        current_number++;
        console.log(sum, current_number);
        
        sum_to(max_number, sum, current_number);
    }else if(current_number == max_number){
        console.log(`SUM -- > ${sum}`);
        return sum;
    }
}



const result = sum_to(3, 0, 0);