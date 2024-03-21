import React from "react";

const Footer = () => {
  return (
    <div className="row m-0 bg-dark ">
      <div class=" mt-2">
        <div
          class="nav nav-pills d-flex justify-content-center "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            ABOUT US
          </button>
          <button
            class="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            COMPANY PROFILE
          </button>
          <button
            class="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            CAREERS
          </button>
          <button
            class="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            HELP & SUPPORT
          </button>
        </div>
        <div class="tab-content mt-2 text-white " id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            RoadWheels is the premier destination for car sharing in emerging
            markets, boasting a robust platform with over 20,000 vehicles
            available across India. Our innovative approach empowers host
            entrepreneurs to effortlessly share their cars, providing an avenue
            for additional passive income while ensuring safety and convenience
            for all.As a member of the RoadWheels community, guests gain access
            to a diverse and affordable selection of vehicles, perfect for
            unlocking unforgettable driving experiences with friends and family.
            Welcome to the Silicon Valley of India, where innovation meets
            tradition—Bangalore. The bustling streets, cultural hubs, and green
            spaces beckon exploration. In a city like this, the need for rental
            car services in Bangalore becomes essential to explore at your own
            pace and convenience. With RoadWheels, every journey is an
            opportunity to create lasting memories, We value diversity and
            believe in harnessing the collective strength of individuals from
            varied backgrounds, experiences, and perspectives. Our inclusive
            workplace culture promotes collaboration, creativity, and mutual
            respect, empowering every team member to contribute their best and
            reach their full potential.indulge your wanderlust, and experience
            the freedom of the open road.Join us at RoadWheels and be part of a
            dynamic team that is passionate about redefining mobility, shaping
            the future of transportation, and creating memorable experiences for
            our customers. Discover your potential, unleash your creativity, and
            drive your career forward with RoadWheels – where every journey is
            an opportunity for growth and success.
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            RoadWheels is a premier car rental service catering to the diverse
            needs of travelers and adventurers alike. Established with a vision
            to redefine mobility. RoadWheels boasts a fleet of meticulously
            maintained vehicles ranging from compact cars to spacious SUVs,
            ensuring that every journey is not just a commute but an experience.
            Our company profile reflects our commitment to excellence, safety,
            and convenience.At RoadWheels, we understand the importance of
            seamless travel experiences, which is why our online platform offers
            easy booking options, allowing customers to reserve their desired
            vehicles with just a few clicks. Whether it's a weekend getaway, a
            business trip, or a family vacation, RoadWheels provides flexible
            rental plans tailored to suit individual preferences and budgets.Our
            dedication to customer satisfaction is evident in our
            round-the-clock customer support, ensuring assistance is readily
            available whenever needed. Moreover, our transparent pricing
            policies and competitive rates make renting a vehicle with
            RoadWheels a hassle-free and cost-effective choice.Safety is our top
            priority, and every vehicle in our fleet undergoes rigorous
            inspections and maintenance checks to guarantee optimal performance
            and reliability on the road.
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            Join the RoadWheels family and embark on an exciting career journey
            with a leading player in the car rental industry. At RoadWheels, we
            believe in fostering a dynamic and inclusive work environment where
            talent thrives, ideas flourish, and innovation is encouraged. Our
            careers section reflects our commitment to attracting, nurturing,
            and retaining top talent across diverse fields and disciplines. As a
            forward-thinking company, RoadWheels offers a plethora of career
            opportunities spanning areas such as technology, operations,
            marketing, customer service, finance, and more. Whether you're a
            seasoned professional looking to make a strategic career move or a
            fresh graduate eager to kickstart your career, RoadWheels provides a
            platform for growth, learning, and development. At RoadWheels, we
            prioritize employee well-being and recognize the importance of
            work-life balance. From flexible work arrangements to comprehensive
            benefits packages, we ensure that our employees are supported in
            both their professional and personal endeavors. As a rapidly growing
            company, RoadWheels offers ample opportunities for career
            advancement and progression. We believe in investing in our
            employees' growth through ongoing training, mentorship programs, and
            skill development initiatives, enabling them to stay ahead in a
            dynamic and competitive industry landscape.
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            Our help and support services at RoadWheels are designed to ensure a
            seamless experience for our customers. With 24/7 availability, our
            dedicated customer support team stands ready to assist with any
            queries or issues, boasting an impressive average response time of
            just 10 minutes. Accessible through live chat, email, or phone, our
            support agents are equipped to address a wide range of concerns,
            from booking assistance to vehicle maintenance inquiries.
            Additionally, our extensive knowledge base includes over 200 FAQs
            and 300 articles, covering everything from payment methods to
            insurance options. For visual learners, we offer 50 instructional
            videos on navigating our platform and rental process . Active
            engagement on social media platforms like Facebook, Twitter, and
            Instagram further enhances our accessibility, while our community
            forum provides a space for users to connect, share experiences, and
            seek advice. At RoadWheels, we prioritize inclusivity, offering
            accessibility features for users.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
