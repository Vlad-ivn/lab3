document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('.registration-form');
    const nameField = document.querySelector('.enter__name')
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        

        let enterName = nameField.value;
        let toppings = getCheckedToppings();
        let sauce = document.querySelector('.extras').value;
        let extras = document.querySelector('.block__topping-radio input:checked').value;
        let deliveryInstructions = document.querySelector('.textarea').value;


        let newRowHTML = `
        <table class="form-table" style='margin-top:20px'>
                <tr>
                    <td>Name</td>
                    <td>${enterName}</td>
                </tr>
                <tr>
                    <td>Pizza Topping</td>
                    <td>${toppings.join(', ')}</td>
                </tr>
                <tr>
                    <td>Pizza Sauce</td>
                    <td>${sauce}</td>
                </tr>
                <tr>
                    <td>Optional Extras</td>
                    <td>${extras}</td>
                </tr>
                <tr>
                    <td>Delivery Instructions</td>
                    <td>${deliveryInstructions}</td>
                </tr>
        </table>        
        `;
        form.insertAdjacentHTML('beforeend', newRowHTML);
        form.reset();
        
    });

    
    function getCheckedToppings() {
        let toppingsChecked = [];
        let checkboxes = document.querySelectorAll('.block__topping-checkbox input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                toppingsChecked.push(checkbox.value);
            }
        });
        return toppingsChecked;
    }
});
