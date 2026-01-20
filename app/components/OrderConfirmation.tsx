import { CheckCircle, X } from 'lucide-react';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

export function OrderConfirmation({ isOpen, onClose, orderNumber }: OrderConfirmationProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-amber-900 mb-2">
              Order Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been received and will be ready for pickup.
            </p>
            
            <div className="bg-amber-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1">Order Number</p>
              <p className="text-2xl font-bold text-amber-900">#{orderNumber}</p>
            </div>

            <div className="text-left space-y-3 mb-6 text-sm text-gray-700">
              <p>✓ We'll prepare your order fresh</p>
              <p>✓ Estimated pickup time: 10-15 minutes</p>
              <p>✓ A confirmation has been sent to your email</p>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-bold transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
