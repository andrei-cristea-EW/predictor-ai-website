import { useState, useEffect } from 'react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

function JoinModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError('');
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {!submitted ? (
          <>
            <div>
              <i className="fa-solid fa-clock modal__icon"></i>
            </div>
            <h2>Registration Paused</h2>
            <p>
              Due to overwhelming demand, new account registrations are
              temporarily paused. Enter your email below to be the first to know
              when spots open up.
            </p>
            <form className="modal__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="modal__input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
              <button type="submit" className="btn-glow" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Notify Me'}
              </button>
            </form>
            {error && <small style={{ color: '#ff6b6b' }}>{error}</small>}
            {!error && <small>We respect your privacy. No spam, ever.</small>}
          </>
        ) : (
          <>
            <div>
              <i className="fa-solid fa-circle-check modal__icon modal__icon--success"></i>
            </div>
            <h2>You're on the List!</h2>
            <p>
              We'll notify you at <strong>{email}</strong> as soon as
              registration reopens. Stay tuned.
            </p>
            <button className="btn-glow" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
              Got It
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default JoinModal;
