$(document)
.ready(function() {   
     $('#transactionForm')
     .submit(function(e) {        
        e.preventDefault();        
        alert('Transaction successful! The money has been transferred.');    
    });
});