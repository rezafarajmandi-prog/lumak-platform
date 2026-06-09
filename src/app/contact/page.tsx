'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    requestTypes: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: ارسال به API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const toggleRequestType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      requestTypes: prev.requestTypes.includes(type)
        ? prev.requestTypes.filter((t) => t !== type)
        : [...prev.requestTypes, type],
    }));
  };

  if (submitted) {
    return (
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-2xl mx-auto text-center">
        <div className="bg-graphite-light border border-bronze/20 rounded-md p-12">
          <h2 className="text-h2 text-warmwhite mb-4">Thank You</h2>
          <p className="text-body text-steel mb-6">
            Your inquiry has been received. Our specification team will respond within 24 hours.
          </p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-h1 mb-4">Contact LUMAK</h1>
      <p className="text-body-lg text-steel mb-12">
        Request technical specifications, pricing, or project consultation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Company / Firm"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-caption text-steel">Job Title</label>
            <select
              className="bg-graphite-light border border-steel/30 rounded-sm px-4 py-3 text-warmwhite text-body focus:border-bronze focus:outline-none"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="Architect">Architect</option>
              <option value="Interior Designer">Interior Designer</option>
              <option value="Contractor">Contractor</option>
              <option value="Developer">Developer</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <Input
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <Input
          label="Phone (optional)"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <fieldset>
          <legend className="text-caption text-steel mb-3">Request Type</legend>
          <div className="flex flex-wrap gap-3">
            {['Project Consultation', 'Catalog Request', 'Pricing', 'Dealership'].map((type) => (
              <label
                key={type}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-colors ${
                  formData.requestTypes.includes(type)
                    ? 'bg-bronze/20 border-bronze text-bronze-light'
                    : 'border-steel/30 text-steel hover:border-steel'
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.requestTypes.includes(type)}
                  onChange={() => toggleRequestType(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <Textarea
          label="Project Details (optional)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your project requirements..."
        />

        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
          Send Inquiry
        </Button>
      </form>
    </section>
  );
}