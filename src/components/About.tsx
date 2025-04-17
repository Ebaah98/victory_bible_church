import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-screen" id="about">
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
          About Us
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Welcome to Victory Bible Church – Solid Rock Sanctuary
          </h2>
          <p>
            At Victory Bible Church – Solid Rock Sanctuary, we are a
            Christ-centered, Spirit-filled community dedicated to transforming
            lives through the power of God's Word, prayer, and love. Our mission
            is to build a strong foundation in Christ for individuals and
            families, equipping them to live victorious lives in every area.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Mission
          </h2>
          <p>
            To raise believers who are rooted in the Word of God, filled with
            the Holy Spirit, and walking in victory—impacting their communities
            and nations for Christ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            What We Believe
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The Bible is the inspired Word of God, our ultimate authority.</li>
            <li>Jesus Christ is the Son of God, our Lord and Savior, who died and rose again.</li>
            <li>Salvation is by grace through faith in Christ alone.</li>
            <li>The Holy Spirit empowers believers for godly living and effective ministry.</li>
            <li>The Church is the body of Christ, called to worship, fellowship, serve, and evangelize.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our History
          </h2>
          <p>
            Victory Bible Church – Solid Rock Sanctuary began with a small group
            of faithful believers, united by a desire to go deeper in God and
            raise a generation built on the Rock—Jesus Christ. Through prayer,
            dedication, and the leading of the Holy Spirit, we've grown into a
            vibrant community that continues to pursue God passionately and
            serve people intentionally.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Leadership
          </h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-700">Pastors</h3>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Senior Pastor:</strong> [Insert Name] – A visionary leader with a heart for teaching God’s Word and empowering believers.</li>
              <li><strong>Associate Pastor:</strong> [Insert Name] – Assists in shepherding the church and leading key ministries.</li>
              <li><strong>Youth Pastor:</strong> [Insert Name] – Passionate about mentoring and equipping the next generation.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700">Deaconesses</h3>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Deaconess [Name]:</strong> Oversees hospitality and women’s ministry.</li>
              <li><strong>Deaconess [Name]:</strong> Supports prayer and outreach efforts.</li>
              <li><strong>Deaconess [Name]:</strong> Provides counseling and care for members.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Join the Family
          </h2>
          <p>
            Whether you’re new to the faith or have been walking with God for
            years, we welcome you with open arms. There's a place for you
            here—come and grow with us as we stand together on the Solid Rock!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
