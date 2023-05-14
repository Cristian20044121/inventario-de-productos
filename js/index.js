let products = [];
    let myIndex;
    function addProduct(){
        const inputs = document.querySelectorAll('.form input');
        inputs.forEach(id=>{
            if(id.value === ''){
                alert('campos vacios')
            }
        });

        //verificacion de categoria existente

        const name = document.querySelector('#name-product').value;
        let productsExist = products.find(products.name) === name;
        if(productsExist){
            alert('error el producto ya existe')
            return;
        }

        // alerta producto registrado 
        alert('producto registrado correctamente')

        addProductTable();
    }

    // agregar a la tabla 

    function addProductTable(){
        document.querySelector('tbody');
        for(let i = 0; i < products.length; i++){
            let row = document.createElement('tr');
            for(a in products[i]){
                let cell = document.createElement('td');
                cell.innerHTML = products[i][a];
                row.appendChild(cell);
                    
            }
            let cell = document.createElement('td');
            let btnEdit= document.createElement('button');
                    btnEdit.innerHTML = 'Edit';
                    btnEdit.className = 'btn btn-primary'
                        let btnDelete = document.createElement('button');
                        btnDelete.innerHTML = 'Delete';
                        btnDelete.className = 'btn btn-danger';
                        cell.appendChild(btnEdit);
                        cell.appendChild(btnDelete);
                        row.appendChild(cell);
            document.querySelector('tbody').appendChild(row);
        }
    }