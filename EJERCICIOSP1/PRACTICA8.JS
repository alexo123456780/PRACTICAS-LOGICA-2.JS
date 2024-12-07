//Tables of multiplication

const tableMultiplication = (table1,table2,table3,table4,table5) =>{

    const result1 = [];
    const result2 = [];
    const result3 = [];
    const result4 = [];
    const result5 = [];



    for(let a = 1 ; a<= 10 ; a++){

        let multiplication1 = table1* a;
        let multiplication2 = table2* a;
        let multiplication3 = table3 * a;
        let multiplication4 = table4 * a;
        let multiplication5 = table5 * a;

        let response = `${table1} * ${a} = ${multiplication1}`;
        let response1 = `${table2} * ${a} = ${multiplication2}`;
        let response2 = `${table3} * ${a} = ${multiplication3}`;
        let response3 = `${table4} * ${a} = ${multiplication4}`;
        let response4 = `${table5} * ${a} = ${multiplication5}`;

        result1.push(response);
        result2.push(response1);
        result3.push(response2);
        result4.push(response3);
        result5.push(response4);

    }

    console.log(result1.join('    '));
    console.log(result2.join('    '));
    console.log(result3.join('    '));
    console.log(result4.join('    '));
    console.log(result5.join('    '));


}

tableMultiplication(1,2,3,4,5);


//Made for IA

const tableMultiplication2 = (...tables) => {
    // Crear un array de resultados para cada tabla
    const results = tables.map(table => {
        // Generar multiplicaciones del 1 al 10 para cada tabla
        return Array.from({length: 10}, (_, i) => {
            const multiplicador = i + 1;
            return `${table} * ${multiplicador} = ${table * multiplicador}`;
        });
    });
    
    // Imprimir cada tabla en una línea separada
    results.forEach(tableResult => {
        console.log(tableResult.join('    '));
    });
}

// Puedes llamar la función con cualquier cantidad de tablas
tableMultiplication2(1, 2, 3, 4, 5);