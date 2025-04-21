import AppConstant from '@/app';

function Donation() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md mt-10 mb-4" id="donate">
      <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">
        Support Our Ministry
      </h2>
      <p className="mb-6 text-gray-700 text-center text-lg">
        Your donations are a vital part of spreading the gospel and supporting our ministry.
        We appreciate your generous support!
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Giving Options</h3>
        <div className="space-y-4 text-base text-gray-800 leading-relaxed">
          <div>
            <span className="font-semibold text-green-700">Cash App:</span>{' '}
            <span className="ml-2">$vbciyonkers</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">Cash App Email:</span>{' '}
            <span className="ml-2">{AppConstant.churchEmail}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">Zelle:</span>{' '}
            <span className="ml-2">{AppConstant.churchEmail}</span>
          </div>
          <div>
            <span className="font-semibold text-green-700">Contact Email:</span>{' '}
            <span className="ml-2">{AppConstant.churchEmail}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-md border border-gray-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Need Help Giving?</h3>
        <p className="text-gray-700">
          If you need assistance or have questions about how to give to the ministry, please email us at:
        </p>
        <p className="mt-3 text-green-700 font-semibold text-lg">
          {AppConstant.churchEmail}
        </p>
      </div>
    </div>
  );
}

export default Donation;
