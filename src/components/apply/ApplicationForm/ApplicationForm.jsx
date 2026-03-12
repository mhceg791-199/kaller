import { useState } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";



export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    resume: null,
    coverLetter: "",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const positions = [
    "Architect",
    "Junior Architect",
    "Interior Designer",
    "Project Manager",
    "Draftsman",
    "Urban Planner",
    "Other",
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              SHOW US WHO YOU ARE
            </h2>
            <p className="text-xl text-gray-600">
              Submit your application and let's build something great together
            </p>
          </div>

          {/* Application Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="(305) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Position *
                  </label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select Position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Professional Details
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter / Why Join Us? *
                  </label>
                  <textarea
                    name="coverLetter"
                    required
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about yourself and why you want to join our team..."
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Upload Resume
              </h3>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  isDragging
                    ? "border-gray-900 bg-gray-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />

                {formData.resume ? (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">
                      {formData.resume.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Click or drag to replace
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">
                      Drop your resume here or click to upload
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF format only (Max 5MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submitted}
                className={`group relative px-12 py-4 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  submitted ? "bg-green-600 hover:bg-green-600" : ""
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Application Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Submit Application
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              We review all applications carefully and will contact qualified
              candidates within 2 weeks.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
