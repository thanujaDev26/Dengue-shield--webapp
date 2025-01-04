import FeedbackForm from "./FeedBackForm";
import WorkingAreaTable from "./WorkingTable";
import Header from "./Header";

const ContactUs = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Feedback Form */}
      <FeedbackForm />

      {/* Open Hours */}
      <WorkingAreaTable />
    </div>
  );
};

export default ContactUs;
