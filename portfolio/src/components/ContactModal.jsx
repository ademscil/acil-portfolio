import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - You need to set up your own EmailJS account
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (connect your Gmail/email)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Replace these IDs with your own:
const EMAILJS_SERVICE_ID = "service_portfolio";
const EMAILJS_TEMPLATE_ID = "template_contact";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

export default function ContactModal({ isOpen, onClose }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg rounded-3xl bg-surface-card border border-border/50 p-8 relative overflow-hidden"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface/50 border border-border/50 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-primary/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="relative mb-6">
                <h3 className="text-2xl font-bold text-text-primary">Send a Message</h3>
                <p className="text-sm text-text-muted mt-1">
                  Fill the form below and I'll get back to you soon.
                </p>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5">
                <div>
                  <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-border/50 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-border/50 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Hi Adam, I'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-border/50 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                  whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                >
                  {status === "idle" && "Send Message"}
                  {status === "sending" && (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  )}
                  {status === "success" && "✓ Message Sent!"}
                  {status === "error" && "Failed to send. Try again."}
                </motion.button>
              </form>

              {/* Status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
                  >
                    <p className="text-sm text-green-400">
                      Thank you! I'll respond as soon as possible.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center"
                  >
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again or contact via WhatsApp.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}