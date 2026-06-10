'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { useTranslation } from '@/components/LanguageProvider';

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
  const t = useTranslation();

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
          <h2 className="text-h2 text-warmwhite mb-4">{t.contact.thankYouTitle}</h2>
          <p className="text-body text-steel mb-6">{t.contact.thankYouText}</p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            {t.contact.submitAnother}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-h1 mb-4">{t.contact.title}</h1>
      <p className="text-body-lg text-steel mb-12">{t.contact.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label={t.contact.fullName}
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label={t.contact.company}
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-caption text-steel">{t.contact.jobTitle}</label>
            <select
              className="bg-graphite-light border border-steel/30 rounded-sm px-4 py-3 text-warmwhite text-body focus:border-bronze focus:outline-none"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
            >
              <option value="">{t.contact.selectPlaceholder}</option>
              {t.contact.jobOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Input
            label={t.contact.email}
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <Input
          label={t.contact.phone}
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <fieldset>
          <legend className="text-caption text-steel mb-3">{t.contact.requestTypeLegend}</legend>
          <div className="flex flex-wrap gap-3">
            {t.contact.requestTypes.map((type) => (
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
          label={t.contact.projectDetails}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t.contact.projectDetailsPlaceholder}
        />

        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
          {t.contact.submit}
        </Button>
      </form>
    </section>
  );
}