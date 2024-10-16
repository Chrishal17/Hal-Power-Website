/*   TimeLine    */
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
    const speed = 50; // lower value = faster

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / (3000 / speed);

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


/* Drop Down Products   */
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const categoryButtons = document.querySelectorAll('.category-option');
    const categories = document.querySelectorAll('.category');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const getQuoteButtons = document.querySelectorAll('.get-quote');
    let cartItems = 0;
  
    // Toggle dropdown visibility
    dropdownButton.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      dropdownContent.style.display = isExpanded ? 'none' : 'block';
    });
  
    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-button') && !dropdownContent.contains(event.target)) {
        dropdownButton.setAttribute('aria-expanded', 'false');
        dropdownContent.style.display = 'none';
      }
    });
  
    // Show relevant products when a category is selected
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
  
        // Hide all categories
        categories.forEach(category => {
          category.style.display = 'none';
        });
  
        // Show the selected category
        document.getElementById(selectedCategory).style.display = 'block';
      });
    });
  
    // Handle "Add to Cart" button clicks
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        cartItems++;
        alert(`Product added to cart. You now have ${cartItems} item(s) in your cart.`);
      });
    });
  
    // Handle "Get a Quote" button clicks
    getQuoteButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.previousElementSibling.previousElementSibling.textContent;
        const productPrice = this.previousElementSibling.textContent;
        alert(`Get a quote for ${productName} at ${productPrice}. Our team will contact you shortly.`);
      });
    });
  });
  

/*    Contact Page    */

/*document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const name = document.getElementById("input-name").value,
  const email = document.getElementById("input-email").value,
  const subject = document.getElementById("input-subject").value,
  const message = document.getElementById("textarea-message").value,

  // Send the data using EmailJS
  emailjs.send("service_jwpb6fs","template_854wz9k", {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
  }).then(function(response) {
    document.getElementById("form-response").innerHTML = "Message sent successfully!";
  }, function(error) {
    document.getElementById("form-response").innerHTML = "Failed to send message. Please try again.";
  });

  // Clear the form
  document.getElementById("contact-form").reset();
});
*/

function sendMail() {
  let parms = {
    name:  document.getElementById("input-name").value,
    email: document.getElementById("input-email").value,
    subjct:  document.getElementById("input-subject").value,
    message: document.getElementById("textarea-message").value
  }

  emailjs.send("service_jwpb6fs","template_854wz9k",parms).then(alert("Email Send!!!"))
}

/*function sendMail() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Prepare the email parameters
    const formData = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
  
    // Send the email
    emailjs.send('service_jwpb6fs', 'template_854wz9k', formData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('form-response').innerHTML = "Message sent successfully!";
      }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('form-response').innerHTML = "Failed to send message. Please try again.";
      });
  });
  
}*/





/* Power Calculator   */
function redirectToCalculator() {
  window.location.href="power.html"
}

// Appliance details including default capacity in Watts
const gerguwfwfgbhtegtwecvs = [
  { name: "Incandescent Bulb", types: ["60W", "100W"], capacity: [60, 100] },
  { name: "Cooler", types: ["Small", "Large"], capacity: [200, 400] },
  { name: "CFL", types: ["15W", "20W"], capacity: [15, 20] },
  { name: "LED Lamp", types: ["9W", "12W"], capacity: [9, 12] },
  { name: "Tube Light", types: ["36W", "40W"], capacity: [36, 40] },
  { name: "Fan", types: ["Ceiling", "Table"], capacity: [75, 50] },
  { name: "Desktop Computer", types: ["Standard", "Gaming"], capacity: [300, 500] },
  { name: "Laptop", types: ["Standard", "Gaming"], capacity: [60, 150] },
  { name: "Window AC", types: ["1 Ton", "1.5 Ton"], capacity: [1200, 1800] },
  { name: "Split AC", types: ["1 Ton", "1.5 Ton"], capacity: [1200, 1800] },
  { name: "LCD TV", types: ["32 inch", "42 inch"], capacity: [120, 150] },
  { name: "LED TV", types: ["32 inch", "50 inch"], capacity: [90, 150] },
];

// Battery and UPS options
const qehrgufydegbcdebwewg = [
  { name: "150 Ah Battery", capacityWh: 1800 * 12 }, // Watt-hours (150Ah * 12V = 1800Wh)
  { name: "200 Ah Battery", capacityWh: 2400 * 12 }, // Watt-hours (200Ah * 12V = 2400Wh)
];
const fqwerytgjergfbwefghq = [
  { name: "600W UPS", power: 600 },
  { name: "1000W UPS", power: 1000 },
  { name: "2000W UPS", power: 2000 },
];

// Function to dynamically populate the table with appliances
function wrtfdwegfsergfwdfvbwe() {
  const terwfbgwtgfgjbfefqeg = document.getElementById('terwfbgwtgfgjbfefqeg');

  gerguwfwfgbhtegtwecvs.forEach((appliance) => {
      const row = document.createElement('tr');

      // Appliance Name
      const tdname = document.createElement('td');
      tdname.className = 'tdfwbgrwgfbetvwef';
      tdname.textContent = appliance.name;
      row.appendChild(tdname);

      // Type Selector
      const tdtype = document.createElement('td');
      tdtype.className = 'tdfwbgrwgfbetvwef';
      const typeSelect = document.createElement('select');
      typeSelect.className = 'qeghfrwtfbtgfvweg';
      const option = document.createElement('option');
      option.value = 0;
      option.textContent = "Select";
      typeSelect.appendChild(option);
      appliance.types.forEach((type, i) => {
          const opt = document.createElement('option');
          opt.value = appliance.capacity[i];
          opt.textContent = type;
          typeSelect.appendChild(opt);
      });
      tdtype.appendChild(typeSelect);
      row.appendChild(tdtype);

      // Quantity Input
      const tdquantity = document.createElement('td');
      tdquantity.className = 'tdfwbgrwgfbetvwef';
      const quantityInput = document.createElement('input');
      quantityInput.className = 'rqevghrfvwegftwgwe';
      quantityInput.type = 'number';
      quantityInput.value = 0;
      tdquantity.appendChild(quantityInput);
      row.appendChild(tdquantity);

      // Capacity Display
      const tdcapacity = document.createElement('td');
      tdcapacity.className = 'tdfwbgrwgfbetvwef';
      tdcapacity.textContent = '0 W';
      typeSelect.addEventListener('change', () => {
          tdcapacity.textContent = typeSelect.value + ' W';
      });
      row.appendChild(tdcapacity);

      // Add row to table
      terwfbgwtgfgjbfefqeg.appendChild(row);
  });
}

// Function to calculate total power consumption and suggest battery & UPS
function grwjhyewfygfdwfvbfwr() {
  let totalPower = 0;

  const rows = document.querySelectorAll('#qwertyuiasdfghjklrf tbody tr');
  rows.forEach((row) => {
      const typeSelect = row.querySelector('select');
      const quantityInput = row.querySelector('input');
      const power = parseFloat(typeSelect.value);
      const quantity = parseInt(quantityInput.value, 10);
      if (!isNaN(power) && !isNaN(quantity) && power > 0 && quantity > 0) {
          totalPower += power * quantity;
      }
  });

  document.getElementById('tergwdcwwergfwerfwff').textContent = `Total Power Consumption: ${totalPower} Watts`;

  // Backup time
  const backupTime = parseFloat(document.getElementById('whjggbdewbwyuefgfegh').value);
  if (!isNaN(backupTime) && totalPower > 0) {
      const totalEnergyRequired = totalPower * backupTime; // in Watt-hours (Wh)

      // Suggest Battery and UPS
      let selectedBattery = qehrgufydegbcdebwewg.find(b => b.capacityWh >= totalEnergyRequired);
      let selectedUPS = fqwerytgjergfbwefghq.find(u => u.power >= totalPower);

      document.getElementById('wetdgfrewgrwwerefwgfw').textContent = `Suggested: ${selectedBattery?.name || "No suitable battery"} and ${selectedUPS?.name || "No suitable UPS"}`;
  } else {
      document.getElementById('wetdgfrewgrwwerefwgfw').textContent = "Please enter a valid backup time.";
  }
}

// Event listener for calculate button
document.getElementById('tegerguwfguhgbfefgwf').addEventListener('click', grwjhyewfygfdwfvbfwr);

// Populate appliance table
wrtfdwegfsergfwdfvbwe();

