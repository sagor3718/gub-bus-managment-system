// Insert Navbar
document.getElementById('navbar').innerHTML = `
<nav class="bg-white text-black p-4 shadow font-bold">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Left Side Logo and Text -->
        <div class="flex items-center space-x-2"> <a href="index.html">
            <img src="./image/gub png (1).png" alt="GUB Logo" class="w-16 h-16"> </a>
            <div class="leading-tight">
                <p><span class="text-green-900">Green</span></p>
                <p><span class="text-blue-700">University</span></p>
            </div>
        </div>

        <!-- Search Input beside the Text with Rounded Shape -->
        <div class="relative ml-4">
            <!-- Form for search -->
            <form action="schedule.html" method="GET" class="flex">
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Search route..." 
                    class="px-4 py-2 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 w-64"
                >
                <!-- Search icon on the right side, clickable to submit the form -->
                <button type="submit" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
                    </svg>
                </button>
            </form>
        </div>

        <!-- Center Scrolling Text -->
        <div class="flex-1 text-center flex items-center justify-center">
            <marquee behavior="scroll" direction="left" class="text-green-600 font-bold text-lg whitespace-nowrap">
                Green University Bus Counter - Fast & Reliable Service for Students!
            </marquee>
        </div>

        <!-- Right Side Navbar Links -->
        <div class="space-x-4">
            <a href="index.html" class="px-4 py-2 rounded transition duration-300 hover:bg-green-600 hover:text-white">Home</a>
            <a href="schedule.html" class="px-4 py-2 rounded transition duration-300 hover:bg-green-600 hover:text-white">Schedule</a>
            <a href="contact-us.html" class="px-4 py-2 rounded transition duration-300 hover:bg-green-600 hover:text-white">Contact Us</a>
            <a href="notice.html" class="px-4 py-2 rounded transition duration-300 hover:bg-green-600 hover:text-white">Notice</a>
            <a href="spokesperson-deshboard.html" class="px-4 py-2 rounded transition duration-300 hover:bg-green-600 hover:text-white">Spokesperson</a>
            <a href="login.html" class="px-4 py-2 rounded transition duration-300 hover:bg-green-600 hover:text-white">Login</a>
        </div>
    </div>
</nav>

`;

// Insert Footer
document.getElementById('footer').innerHTML = `
 <footer class="relative text-white py-10">
  <!-- Background Image with Darker Green Overlay -->
  <div class="absolute inset-0 bg-[url('./image/footer-1.jpg')] bg-cover bg-bottom opacity-90"></div> <!-- Change to bg-top -->
  <div class="absolute inset-0 bg-green-900 opacity-70" style="background-position: center bottom;"></div> <!-- Darker green overlay -->

  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 relative z-10">

    <!-- Branding & About -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">GUB Bus Management</h2>
      <p class="text-white text-sm font-bold">
        Ensuring safe, timely, and comfortable transportation for Green University students and faculty.
      </p>
    </div>

    <!-- Quick Links -->
    <div class="space-y-2">
      <h3 class="text-lg font-bold">Quick Links</h3>
      <a href="home.html" class="hover:bg-green-600 hover:text-white transition block px-2 py-1 rounded font-bold">Home</a>
      <a href="schedule.html" class="hover:bg-green-600 hover:text-white transition block px-2 py-1 rounded font-bold">Schedule</a>
      <a href="about-us.html" class="hover:bg-green-600 hover:text-white transition block px-2 py-1 rounded font-bold">About Us</a>
      <a href="services.html" class="hover:bg-green-600 hover:text-white transition block px-2 py-1 rounded font-bold">Services</a>
      <a href="contact-us.html" class="hover:bg-green-600 hover:text-white transition block px-2 py-1 rounded font-bold">Contact Us</a>
      <a href="faqs.html" class="hover:bg-green-600 hover:text-white transition block px-2 py-1 rounded font-bold">FAQs</a>
    </div>

    <!-- Services -->
    <div class="space-y-2">
      <h3 class="text-lg font-bold">Services</h3>
      <p class="text-white text-sm font-bold">Real-time Bus Tracking</p>
      <p class="text-white text-sm font-bold">Route Optimization</p>
      <p class="text-white text-sm font-bold">Emergency Support</p>
      <p class="text-white text-sm font-bold">Student Discount Program</p>
    </div>

    <!-- Contact Info & Socials -->
    <div class="space-y-4">
      <h3 class="text-lg font-bold">Get in Touch</h3>
      <p class="text-white text-sm font-bold">📧 Email: support@gubbus.com</p>
      <p class="text-white text-sm font-bold">📞 Phone: +880 1234-567890</p>
      <p class="text-white text-sm font-bold">📍 Green University of Bangladesh, Dhaka</p>

      <div class="flex space-x-4 mt-2">
        <a href="https://www.facebook.com" target="_blank">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook.png" alt="Facebook" class="hover:opacity-75 transition">
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png" alt="Instagram" class="hover:opacity-75 transition">
        </a>
        <a href="https://www.whatsapp.com" target="_blank">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png" alt="WhatsApp" class="hover:opacity-75 transition">
        </a>
      </div>
    </div>
  </div>

  <!-- Footer Bottom -->
  <div class="border-t border-gray-700 mt-6 pt-4 text-center text-white font-bold text-sm relative z-10">
    &copy; 2025 <span class="text-green-500"> Green University Of Bangladesh. </span>All Rights Reserved.
  </div>
</footer>


`;

// Toggle Password Visibility
function togglePassword() {
  const passwordField = document.getElementById('password');
  const toggleIcon = document.getElementById('toggle-icon');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleIcon.src = 'https://img.icons8.com/ios/50/000000/visible.png';
  } else {
    passwordField.type = 'password';
    toggleIcon.src = 'https://img.icons8.com/ios/50/000000/invisible.png';
  }
}

// Slider Logic
const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 34seconds
setInterval(showNextSlide, 4000); // Updated to 4000ms (4 seconds)