import React from "react";
import AppConstant from "@/app";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-screen" id="about">
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-2 text-blue-900">
          VICTORY BIBLE CHURCH INTERNATIONAL - USA
        </h1>
        <h2 className="text-md text-center italic mb-10 text-gray-600">
          "Raising the Foundations for Many Generations" — Isaiah 58:12
        </h2>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Vision
          </h2>
          <p>
            Our vision is to be a Biblically Functioning Community of Followers
            of Jesus Christ in order to reach mankind with the gospel within
            their geographic, demographic, cultural, and spiritual context.
          </p>
        </section>

        {/* Official VBCI Mission Statement */}
        <section className="mb-8 bg-blue-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            VBCI Mission Statement
          </h2>
          <p className="font-bold uppercase tracking-wide text-gray-700">
            To convert people within our community in all creative ways,
            developing them into fully functioning followers of Jesus Christ.
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
            raise a generation built on the Rock—Jesus Christ. Under the divine
            direction of our founding father, Bishop N.A. Tackie Yarboi, and
            through prayer and the leading of the Holy Spirit, God saw it fit
            that we would spread His Word in Yonkers, New York. From humble
            beginnings, we’ve grown into a vibrant and passionate community
            committed to pursuing God and serving His people with purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Leadership</h2>
          <ul className="list-disc list-inside space-y-2">
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {AppConstant.PASTORS.map((pastor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={pastor.image}
                      alt={pastor.name}
                      className="w-full object-cover aspect-square"
                    />
                    <div className="p-4 text-center">
                      <h2 className="text-xl font-semibold text-gray-800">{pastor.name}</h2>
                      <p className="text-md text-gray-600">{pastor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ul>
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
