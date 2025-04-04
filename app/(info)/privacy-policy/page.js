import React from "react";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold text-center text-gray-900">Privacy Notice</h1>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        <strong>What does OnlyLinks.com do?</strong> OnlyLinks.com is the launchpad to your latest video, article, recipe, tour, store, website, social post, and other content. We connect your audience to wherever you are online, and make your content more discoverable and easier to manage. Our Website (located at{" "}
        <a href="https://onlylinks.com/" className="text-blue-600 hover:underline">https://onlylinks.com/</a>) and other digital properties (such as our mobile app and Developer Portal) (together our “Platform”) provides information about us and allows individuals and businesses to sign-up as OnlyLinks.com Users (to create a personalised, easily-customisable page), as Subscribers (to subscribe to and follow OnlyLinks.com Users), or as developers (to create functionality that interacts with our Platform) (together, the “OnlyLinks.com Services“).
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        The pages that OnlyLinks.com Users are able to create using the OnlyLinks.com Services are referred to in this Privacy Notice as “User Profiles“. User Profiles are accessible by the public.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        We are headquartered in Melbourne, Australia and have offices in Sydney. For more information about OnlyLinks.com, please see the “About” section of our Website at{" "}
        <a href="https://onlylinks.com/about/" className="text-blue-600 hover:underline">https://onlylinks.com/s/about/</a>.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        <strong>How does this Privacy Notice apply to me?</strong> This Privacy Notice only applies to personal information we collect as a controller from:
      </p>

      <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-700">
        <li>Visitors to our Platform (“Platform Visitors”);</li>
        <li>Individuals, representatives of individuals, or companies that sign up to use our OnlyLinks.com Services via a paid plan (“Paid Plan Users”) or free plan (“Free Plan Users”), together our “OnlyLinks.com Users”;</li>
        <li>Individuals that sign up to subscribe to and/or follow User Profiles (“Subscribers”);</li>
        <li>Individuals that visit and interact with User Profiles (“Profile Visitors”);</li>
        <li>Developers that sign up to our Developer Portal in order to build functionality that interacts with the OnlyLinks.com Services (“OnlyLinks.com Developers”);</li>
        <li>Individuals who respond to our surveys, marketing materials or participate in trade promotions or competitions that we may run from time to time.</li>
      </ul>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        This Privacy Notice applies to the processing of personal information by OnlyLinks.com as a controller. When we talk about OnlyLinks.com acting as a “controller”, we mean that OnlyLinks.com determines the purpose and the means of the processing (i.e. we make decisions about how we will handle your personal information).
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        Because of the nature of our services, we can also act as a “processor” on behalf of OnlyLinks.com Users. This means that, when we are instructed by an OnlyLinks.com User, we can facilitate processing of Profile Visitors’ and Subscribers’ personal information on behalf of that OnlyLinks.com User (“Processor Services”). This Privacy Notice does not address Processor Services. If you are a Profile Visitor or Subscriber, and want to know how an OnlyLinks.com User handles your personal information, please get in touch with the OnlyLinks.com User directly and/or refer to any privacy notice on the relevant User Profile.
      </p>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        If you provide us with information about another person (if, for example, you are a representative of an individual), you must provide them with a copy of this Privacy Notice and let that other person know that we use their personal information in the ways set out in this Privacy Notice.
      </p>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        <strong>What personal information do we collect?</strong> The personal information that we may collect about you broadly falls into the following categories:
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <strong>Information you provide voluntarily:</strong>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            When you sign up to become a OnlyLinks.com User, a Subscriber, use or interact with our OnlyLinks.com Services or staff, visit our Platform, visit a User Profile, sign up to our Developer Portal, respond to a survey or participate in a trade promotion we may ask you to provide personal information voluntarily.
          </p>
        </div>

        <div>
          <strong>Information that we collect automatically:</strong>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            When you visit our Platform, use our OnlyLinks.com Services, interact with a User Profile, respond to a survey or participate in a trade promotion we collect certain information automatically from your device.
          </p>
        </div>

        <div>
          <strong>Children’s data:</strong>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            Our services are not intended for use by children under the age of 18 (the “Age Limit”). If you are under the Age Limit, please do not use the OnlyLinks.com Services and do not provide us with your personal information.
          </p>
        </div>

        <div>
          <strong>Why do we collect your personal information?</strong>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            In general, we will use the information we collect for the purposes described in this Privacy Notice or for purposes that we explain to you at the time we collect your personal information.
          </p>
        </div>

        <div>
          <strong>Who may we disclose your personal information to?</strong>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            We may disclose your personal information to the following categories of recipients:
          </p>
          <ul className="mt-4 list-inside list-disc pl-4 text-lg text-gray-700">
            <li>To our group companies, third party services providers, or partners to support and enhance our services.</li>
            <li>To law enforcement or government agencies where required by law.</li>
            <li>To an actual or potential buyer in connection with a business merger or acquisition.</li>
            <li>To other parties with your consent.</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        <strong>How long do we retain your personal information?</strong> We will retain your personal information for as long as necessary to fulfill our legal and business obligations.
      </p>
    </div>
  );
}
