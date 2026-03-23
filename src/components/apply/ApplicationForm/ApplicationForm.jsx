// import { useState } from "react";
// import { Upload, Send, CheckCircle } from "lucide-react";



// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     portfolio: "",
//     resume: null,
//     coverLetter: "",
//   });

//   const [isDragging, setIsDragging] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file && file.type === "application/pdf") {
//       setFormData((prev) => ({ ...prev, resume: file }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   const positions = [
//     "Architect",
//     "Junior Architect",
//     "Interior Designer",
//     "Project Manager",
//     "Draftsman",
//     "Urban Planner",
//     "Other",
//   ];
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
//               SHOW US WHO YOU ARE
//             </h2>
//             <p className="text-xl text-gray-600">
//               Submit your application and let's build something great together
//             </p>
//           </div>

//           {/* Application Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
//           >
//             {/* Personal Information */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
//                 Personal Information
//               </h3>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="(305) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Desired Position *
//                   </label>
//                   <select
//                     name="position"
//                     required
//                     value={formData.position}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   >
//                     <option value="">Select Position</option>
//                     {positions.map((pos) => (
//                       <option key={pos} value={pos}>
//                         {pos}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Details */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
//                 Professional Details
//               </h3>

//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Years of Experience *
//                   </label>
//                   <select
//                     name="experience"
//                     required
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   >
//                     <option value="">Select Experience</option>
//                     <option value="0-1">0-1 years</option>
//                     <option value="1-3">1-3 years</option>
//                     <option value="3-5">3-5 years</option>
//                     <option value="5-10">5-10 years</option>
//                     <option value="10+">10+ years</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Portfolio URL (Optional)
//                   </label>
//                   <input
//                     type="url"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="https://yourportfolio.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Cover Letter / Why Join Us? *
//                   </label>
//                   <textarea
//                     name="coverLetter"
//                     required
//                     value={formData.coverLetter}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
//                     placeholder="Tell us about yourself and why you want to join our team..."
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Resume Upload */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
//                 Upload Resume
//               </h3>

//               <div
//                 onDragOver={(e) => {
//                   e.preventDefault();
//                   setIsDragging(true);
//                 }}
//                 onDragLeave={() => setIsDragging(false)}
//                 onDrop={handleDrop}
//                 className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
//                   isDragging
//                     ? "border-gray-900 bg-gray-50"
//                     : "border-gray-300 hover:border-gray-400"
//                 }`}
//               >
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   onChange={handleFileChange}
//                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 />

//                 <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />

//                 {formData.resume ? (
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium text-gray-900">
//                       {formData.resume.name}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Click or drag to replace
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium text-gray-900">
//                       Drop your resume here or click to upload
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       PDF format only (Max 5MB)
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={submitted}
//                 className={`group relative px-12 py-4 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
//                   submitted ? "bg-green-600 hover:bg-green-600" : ""
//                 }`}
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   {submitted ? (
//                     <>
//                       <CheckCircle className="w-5 h-5" />
//                       Application Submitted!
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                       Submit Application
//                     </>
//                   )}
//                 </span>
//                 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
//               </button>
//             </div>

//             <p className="text-center text-sm text-gray-500 mt-6">
//               We review all applications carefully and will contact qualified
//               candidates within 2 weeks.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!resume) {
      setError("Please upload your resume (PDF only)");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position);
    data.append("experience", formData.experience);
    data.append("portfolio", formData.portfolio);
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", resume);

    try {
      const res = await fetch("http://localhost:5000/api/appliactions/apply", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      setSuccess(true);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        coverLetter: "",
      });
      setResume(null);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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

                {resume ? (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">{resume.name}</p>
                    <p className="text-sm text-gray-500">Click or drag to replace</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">
                      Drop your resume here or click to upload
                    </p>
                    <p className="text-sm text-gray-500">PDF format only (Max 5MB)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                <CheckCircle className="w-5 h-5" />
                Application submitted successfully! We'll get back to you soon.
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading || success}
                className={`group relative px-12 py-4 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  success ? "bg-green-600 hover:bg-green-600" : ""
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {loading ? (
                    <>Sending...</>
                  ) : success ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Submitted!
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
              We review all applications carefully and will contact qualified candidates within 2 weeks.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}


// import { useState } from "react";
// import { Upload, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/applications/apply";

// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     portfolio: "",
//     resume: null,
//     coverLetter: "",
//   });

//   const [isDragging, setIsDragging] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear error when user types
//     if (error) setError("");
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Validate file size (5MB max)
//       if (file.size > 5 * 1024 * 1024) {
//         setError("File size must be less than 5MB");
//         return;
//       }
//       // Validate file type
//       if (file.type !== "application/pdf") {
//         setError("Only PDF files are allowed");
//         return;
//       }
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setError("");
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
    
//     if (!file) return;

//     // Validate file
//     if (file.size > 5 * 1024 * 1024) {
//       setError("File size must be less than 5MB");
//       return;
//     }
    
//     if (file.type !== "application/pdf") {
//       setError("Only PDF files are allowed");
//       return;
//     }
    
//     setFormData((prev) => ({ ...prev, resume: file }));
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate resume
//     if (!formData.resume) {
//       setError("Please upload your resume");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Create FormData for multipart/form-data
//       const submitData = new FormData();
//       submitData.append("name", formData.name);
//       submitData.append("email", formData.email);
//       submitData.append("phone", formData.phone);
//       submitData.append("position", formData.position);
//       submitData.append("experience", formData.experience);
//       submitData.append("portfolio", formData.portfolio);
//       submitData.append("coverLetter", formData.coverLetter);
//       submitData.append("resume", formData.resume);

//       // Send to API
//       const response = await axios.post(API_URL, submitData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("✅ Success:", response.data);

//       // Show success message
//       setSubmitted(true);
      
//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           position: "",
//           experience: "",
//           portfolio: "",
//           resume: null,
//           coverLetter: "",
//         });
//       }, 3000);

//     } catch (err) {
//       console.error("❌ Error:", err);
      
//       if (err.response) {
//         // Server responded with error
//         setError(err.response.data.message || "Failed to submit application");
//       } else if (err.request) {
//         // Request made but no response
//         setError("Cannot connect to server. Please try again.");
//       } else {
//         // Other errors
//         setError("Something went wrong. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const positions = [
//     "Architect",
//     "Junior Architect",
//     "Interior Designer",
//     "Project Manager",
//     "Draftsman",
//     "Urban Planner",
//     "Other",
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
//               SHOW US WHO YOU ARE
//             </h2>
//             <p className="text-xl text-gray-600">
//               Submit your application and let's build something great together
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800">
//               <AlertCircle className="w-5 h-5 flex-shrink-0" />
//               <p>{error}</p>
//             </div>
//           )}

//           {/* Success Message */}
//           {submitted && (
//             <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
//               <CheckCircle className="w-5 h-5 flex-shrink-0" />
//               <p>Application submitted successfully! We'll contact you soon.</p>
//             </div>
//           )}

//           {/* Application Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
//           >
//             {/* Personal Information */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
//                 Personal Information
//               </h3>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="(305) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Desired Position *
//                   </label>
//                   <select
//                     name="position"
//                     required
//                     value={formData.position}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <option value="">Select Position</option>
//                     {positions.map((pos) => (
//                       <option key={pos} value={pos}>
//                         {pos}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Details */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
//                 Professional Details
//               </h3>

//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Years of Experience *
//                   </label>
//                   <select
//                     name="experience"
//                     required
//                     value={formData.experience}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <option value="">Select Experience</option>
//                     <option value="0-1">0-1 years</option>
//                     <option value="1-3">1-3 years</option>
//                     <option value="3-5">3-5 years</option>
//                     <option value="5-10">5-10 years</option>
//                     <option value="10+">10+ years</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Portfolio URL (Optional)
//                   </label>
//                   <input
//                     type="url"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="https://yourportfolio.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Cover Letter / Why Join Us? *
//                   </label>
//                   <textarea
//                     name="coverLetter"
//                     required
//                     value={formData.coverLetter}
//                     onChange={handleChange}
//                     disabled={loading}
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="Tell us about yourself and why you want to join our team..."
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Resume Upload */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
//                 Upload Resume *
//               </h3>

//               <div
//                 onDragOver={(e) => {
//                   e.preventDefault();
//                   if (!loading) setIsDragging(true);
//                 }}
//                 onDragLeave={() => setIsDragging(false)}
//                 onDrop={handleDrop}
//                 className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
//                   loading 
//                     ? "border-gray-200 bg-gray-50 cursor-not-allowed" 
//                     : isDragging
//                     ? "border-gray-900 bg-gray-50"
//                     : "border-gray-300 hover:border-gray-400"
//                 }`}
//               >
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   onChange={handleFileChange}
//                   disabled={loading}
//                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
//                 />

//                 <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />

//                 {formData.resume ? (
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium text-gray-900">
//                       {formData.resume.name}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Click or drag to replace
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium text-gray-900">
//                       Drop your resume here or click to upload
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       PDF format only (Max 5MB)
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={loading || submitted}
//                 className={`group relative px-12 py-4 font-semibold rounded-lg overflow-hidden transition-all duration-300 disabled:cursor-not-allowed ${
//                   submitted
//                     ? "bg-green-600 text-white"
//                     : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl"
//                 } ${loading ? "opacity-75" : ""}`}
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   {loading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Submitting...
//                     </>
//                   ) : submitted ? (
//                     <>
//                       <CheckCircle className="w-5 h-5" />
//                       Application Submitted!
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                       Submit Application
//                     </>
//                   )}
//                 </span>
//                 {!loading && !submitted && (
//                   <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
//                 )}
//               </button>
//             </div>

//             <p className="text-center text-sm text-gray-500 mt-6">
//               We review all applications carefully and will contact qualified
//               candidates within 2 weeks.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
