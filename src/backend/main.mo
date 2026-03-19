import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  // Data Types
  type Course = {
    id : Nat;
    title : Text;
    category : Text;
    durationWeeks : Nat;
    description : Text;
    isAvailable : Bool;
  };

  module Course {
    public func compare(course1 : Course, course2 : Course) : Order.Order {
      switch (course1.id, course2.id) {
        case (id1, id2) { Nat.compare(id1, id2) };
      };
    };
  };

  type PricingPlan = {
    name : Text;
    localPrice : Text;
    usdEquivalent : Text;
    period : Text;
    features : [Text];
  };

  type CountryPricing = {
    country : Text;
    plans : [PricingPlan];
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  // Storage
  let courses = Map.empty<Nat, Course>();
  let contactSubmissions = List.empty<ContactSubmission>();
  var nextCourseId = 1;

  // Course Categories
  let courseCategories = [
    {
      name = "Technology";
      icon = "💾";
      description = "Programming, IT, Web Development";
    },
    {
      name = "Business";
      icon = "📈";
      description = "Entrepreneurship, Management, Finance";
    },
    {
      name = "Digital Marketing";
      icon = "📱";
      description = "Social Media, Advertising, E-commerce";
    },
    {
      name = "Skilled Trades";
      icon = "🔨";
      description = "Plumbing, Electrical, Construction";
    },
    {
      name = "Agriculture";
      icon = "🌱";
      description = "Farming, Agribusiness, Food Processing";
    },
    {
      name = "Healthcare";
      icon = "🩺";
      description = "Nursing, Health Tech, Patient Care";
    },
  ];

  // Pricing Data
  let countryPricingData : [CountryPricing] = [
    {
      country = "Nigeria";
      plans = [
        {
          name = "Basic";
          localPrice = "₦3,500";
          usdEquivalent = "~$2.30";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "₦7,500";
          usdEquivalent = "~$5";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "₦15,000";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
    {
      country = "Kenya";
      plans = [
        {
          name = "Basic";
          localPrice = "KES 275";
          usdEquivalent = "~$2";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "KES 548";
          usdEquivalent = "~$4";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "KES 1,365";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
    {
      country = "Ghana";
      plans = [
        {
          name = "Basic";
          localPrice = "₵26";
          usdEquivalent = "~$2";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "₵53";
          usdEquivalent = "~$4";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "₵132";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
    {
      country = "Ethiopia";
      plans = [
        {
          name = "Basic";
          localPrice = "Br 117";
          usdEquivalent = "~$2";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "Br 235";
          usdEquivalent = "~$4";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "Br 588";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
    {
      country = "Tanzania";
      plans = [
        {
          name = "Basic";
          localPrice = "TSh 5,500";
          usdEquivalent = "~$2";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "TSh 11,000";
          usdEquivalent = "~$4";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "TSh 23,000";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
    {
      country = "Uganda";
      plans = [
        {
          name = "Basic";
          localPrice = "UGX 7,340";
          usdEquivalent = "~$2";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "UGX 14,680";
          usdEquivalent = "~$4";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "UGX 36,700";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
    {
      country = "Rwanda";
      plans = [
        {
          name = "Basic";
          localPrice = "RWF 2,360";
          usdEquivalent = "~$2";
          period = "month";
          features = ["Course access", "Community support"];
        },
        {
          name = "AI Tutor";
          localPrice = "RWF 4,720";
          usdEquivalent = "~$4";
          period = "month";
          features = ["Basic features", "AI tutoring"];
        },
        {
          name = "Professional Cert";
          localPrice = "RWF 11,800";
          usdEquivalent = "~$10";
          period = "per course";
          features = ["All features", "Certification"];
        },
      ];
    },
  ];

  // Course Catalog Functions
  public shared ({ caller }) func addCourse(title : Text, category : Text, durationWeeks : Nat, description : Text, isAvailable : Bool) : async () {
    let course : Course = {
      id = nextCourseId;
      title;
      category;
      durationWeeks;
      description;
      isAvailable;
    };
    courses.add(nextCourseId, course);
    nextCourseId += 1;
  };

  public query ({ caller }) func getCourse(id : Nat) : async Course {
    switch (courses.get(id)) {
      case (null) { Runtime.trap("Course not found") };
      case (?course) { course };
    };
  };

  public query ({ caller }) func getCoursesByCategory(category : Text) : async [Course] {
    courses.values().filter(
      func(c) { c.category == category }
    ).toArray().sort();
  };

  public query ({ caller }) func getAvailableCourses() : async [Course] {
    courses.values().filter(
      func(c) { c.isAvailable }
    ).toArray().sort();
  };

  public query ({ caller }) func getAllCategories() : async [{ name : Text; icon : Text; description : Text }] {
    courseCategories;
  };

  // Pricing Functions
  public query ({ caller }) func getCountryPricing(country : Text) : async CountryPricing {
    switch (countryPricingData.find(func(c) { c.country == country })) {
      case (null) { Runtime.trap("Pricing not found for country: " # country) };
      case (?pricing) { pricing };
    };
  };

  public query ({ caller }) func getAllCountryPricing() : async [CountryPricing] {
    countryPricingData;
  };

  // Contact Form Logic
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };
};
