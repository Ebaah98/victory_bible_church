import AppConstant from '@/app'

function Donation() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md mt-10 mb-4" id='donate'>
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Support Our Ministry
      </h2>
      <p className="mb-6 text-gray-700">
        Your donations are a vital part of spreading the gospel and supporting
        our ministry. We appreciate your generous support!
      </p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Giving Options
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Cash App:</strong> $vbciyonkers
          </li>
          <li>
            <strong>Cash App Email:</strong> <small>{AppConstant.churchEmail}</small>
          </li>
          <li>
            <strong>Zelle:</strong> <small>{AppConstant.churchEmail}</small>
          </li>
          <li>
            <strong>Contact Email:</strong> <small>{AppConstant.churchEmail}</small>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 p-6 rounded-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Need Help Giving?
        </h3>
        <p className="text-gray-700">
          If you need assistance or have questions about how to give to the ministry, please email us at:
        </p>
        <p className="mt-2 text-green-700 font-semibold">
          <small>{AppConstant.churchEmail}</small>
        </p>
      </div>
    </div>
  );
}

export default Donation;
