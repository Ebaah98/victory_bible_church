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
            lives through the power of God's Word, prayer, and love.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Mission
          </h2>
          <p>
            To convert people within our community in all creative ways,
            developing them into fully functioning followers of Jesus Christ.
          </p>
        </section>

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
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Leadership</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Presiding Bishop of VBCI Worldwide:</span>{" "}
              Bishop Nii Nabi Apiakai Tackie Yarboi (Bishop N.A. Tackie Yarboi)
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>
                  <span className="font-semibold">North America Regional Overseer:</span>{" "}
                  Bishop Elijah P. Saforo (Bishop Elijah Patrick Saforo)
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>
                      <span className="font-semibold">Resident Pastor – Solid Rock Sanctuary:</span>{" "}
                      Rev. Godwin Aryeetey
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>
                          <span className="font-semibold">Assistant Pastor:</span>{" "}
                          Pastor Larry Awagah
                        </li>
                        <li>
                          <span className="font-semibold">Deaconess:</span>{" "}
                          Juliana
                        </li>
                        <li>
                          <span className="font-semibold">Lady Pastor:</span>{" "}
                          Getrude Abbey
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
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
