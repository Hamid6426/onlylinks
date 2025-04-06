import React from "react";
import Link from "next/link";

const CookiePolicy = () => {
  return (
    <section className="w-full max-w-[1024px] px-6 mx-auto mt-6">
      <h2 className="text-xl font-semibold">Cookie Policy</h2>

      <p className="mt-2 text-gray-600">
        <strong>What are cookies?</strong> Cookies are small data files that are
        placed on your computer or mobile device. Website owners can use cookies
        for a variety of reasons, including enabling the website to function
        efficiently, providing personalized content, advertising, and analytics.
      </p>

      <p className="mt-2 text-gray-600">
        OnlyLinks.com sets its own cookies (<strong>first-party cookies</strong>
        ) and allows others to set cookies (<strong>third-party cookies</strong>
        ) for additional functionality like advertising, social sharing, and
        tracking.
      </p>

      <h3 className="mt-4 text-lg font-semibold">Why do we use cookies?</h3>
      <p className="mt-2 text-gray-600">
        We use cookies for essential platform functionality, analytics,
        personalization, and advertising. Users can manage their cookie
        preferences through our cookie consent tool.
      </p>

      <h3 className="mt-4 text-lg font-semibold">
        What about other tracking technologies?
      </h3>
      <p className="mt-2 text-gray-600">
        We may use technologies like web beacons (tracking pixels or clear GIFs)
        to monitor user interactions, track emails, and analyze advertising
        effectiveness.
      </p>

      <h3 className="mt-4 text-lg font-semibold">
        How can you control cookies?
      </h3>
      <p className="mt-2 text-gray-600">
        You can manage cookies using our cookie consent tool or adjust browser
        settings to accept or reject cookies. However, disabling cookies may
        limit some platform functionality.
      </p>

      <h3 className="mt-4 text-lg font-semibold">
        How often do we update this Cookie Policy?
      </h3>
      <p className="mt-2 text-gray-600">
        This policy may be updated periodically to reflect changes in
        regulations or our cookie usage. The latest update was on{" "}
        <strong>March 2025</strong>.
      </p>

      <h3 className="mt-4 text-lg font-semibold">
        Where can you get further information?
      </h3>
      <p className="mt-2 text-gray-600">
        If you have any questions about our use of cookies, please email us at{" "}
        <Link
          href="mailto:support@onlylinks.com"
          className="text-blue-600 underline"
        >
          support@onlylinks.com
        </Link>
        .
      </p>
    </section>
  );
};

export default CookiePolicy;
