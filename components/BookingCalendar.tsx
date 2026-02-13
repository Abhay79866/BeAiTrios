import { useState, useMemo } from 'react';

interface BookingForm {
    name: string;
    email: string;
    description: string;
}

const BookingCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [bookingForm, setBookingForm] = useState<BookingForm>({
        name: '',
        email: '',
        description: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Constants
    const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const TIME_SLOTS = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    // Calendar Logic
    const calendarDays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        // Add empty placeholders for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        // Add actual days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    }, [currentDate]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDate(null);
        setSelectedTime(null);
        setShowForm(false);
        setSubmitStatus('idle');
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDate(null);
        setSelectedTime(null);
        setShowForm(false);
        setSubmitStatus('idle');
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isPast = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const isSelected = (date: Date) => {
        return selectedDate &&
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    const handleDateClick = (date: Date) => {
        if (isPast(date)) return;
        setSelectedDate(date);
        setSelectedTime(null);
        setShowForm(false);
        setSubmitStatus('idle');
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setShowForm(true);
        setSubmitStatus('idle');
    };

    const handleBookingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formattedDate = selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        try {
            const response = await fetch("https://formsubmit.co/ajax/2004abhaypatel@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Booking Request: ${bookingForm.name}`,
                    name: bookingForm.name,
                    email: bookingForm.email,
                    date: formattedDate,
                    time: selectedTime,
                    description: bookingForm.description,
                    _template: "table",
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setBookingForm({ name: '', email: '', description: '' });
                setTimeout(() => {
                    setShowForm(false);
                    setSelectedDate(null);
                    setSelectedTime(null);
                    setSubmitStatus('idle');
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Booking error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="glass-card p-6 md:p-10 rounded-[2.5rem] border-primary/5 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">Discovery Call</h4>
                    <p className="text-sm opacity-60">15-minute quick strategy pulse check</p>
                </div>
            </div>

            {!showForm ? (
                <>
                    {/* Month Navigation */}
                    <div className="flex justify-between items-center mb-6 px-2">
                        <button onClick={handlePrevMonth} className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                            <span className="material-icons text-sm">chevron_left</span>
                        </button>
                        <span className="font-bold text-lg">
                            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                        <button onClick={handleNextMonth} className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                            <span className="material-icons text-sm">chevron_right</span>
                        </button>
                    </div>

                    {/* Days Header */}
                    <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold opacity-40">
                        {DAYS.map((d, i) => <div key={i}>{d}</div>)}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2 text-center mb-8">
                        {calendarDays.map((date, i) => (
                            <div key={i} className="aspect-square flex items-center justify-center">
                                {date ? (
                                    <button
                                        onClick={() => handleDateClick(date)}
                                        disabled={isPast(date)}
                                        className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-full text-sm flex items-center justify-center transition-all
                      ${isSelected(date) ? 'bg-primary text-white scale-110 shadow-lg' : ''}
                      ${isToday(date) && !isSelected(date) ? 'border border-primary text-primary' : ''}
                      ${!isSelected(date) && !isPast(date) ? 'hover:bg-primary/10 cursor-pointer' : ''}
                      ${isPast(date) ? 'opacity-20 cursor-not-allowed' : ''}
                    `}
                                    >
                                        {date.getDate()}
                                    </button>
                                ) : (
                                    <div className="w-8 h-8" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                        <div className="animate-reveal">
                            <h5 className="text-sm font-bold opacity-60 mb-4 text-center">Available Times</h5>
                            <div className="flex flex-wrap gap-2 justify-center mb-2">
                                {TIME_SLOTS.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelect(time)}
                                        className={`
                      px-4 py-2 rounded-full text-xs font-bold transition-all
                      ${selectedTime === time
                                                ? 'bg-primary text-white shadow-lg scale-105'
                                                : 'glass-card hover:bg-white hover:text-primary'}
                    `}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4 animate-reveal">
                    <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold">Confirm Booking</h5>
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="text-xs opacity-50 hover:opacity-100 hover:text-primary transition-colors"
                        >
                            Back
                        </button>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-xl text-sm mb-4 border border-primary/10">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-icons text-primary text-xs">event</span>
                            <span className="font-bold">
                                {selectedDate?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary text-xs">schedule</span>
                            <span className="font-bold">{selectedTime}</span>
                        </div>
                    </div>

                    {submitStatus === 'success' ? (
                        <div className="bg-green-500/10 text-green-500 p-4 rounded-xl text-center border border-green-500/20">
                            <span className="material-icons text-3xl mb-2">check_circle</span>
                            <p className="font-bold">Booking Request Sent!</p>
                            <p className="text-xs opacity-80 mt-1">We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={bookingForm.name}
                                onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                                className="w-full bg-white/40 border border-primary/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary outline-none text-sm placeholder:opacity-40"
                                disabled={isSubmitting}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={bookingForm.email}
                                onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                                className="w-full bg-white/40 border border-primary/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary outline-none text-sm placeholder:opacity-40"
                                disabled={isSubmitting}
                            />
                            <textarea
                                placeholder="Briefly describe your project..."
                                value={bookingForm.description}
                                onChange={(e) => setBookingForm({ ...bookingForm, description: e.target.value })}
                                className="w-full bg-white/40 border border-primary/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary outline-none text-sm placeholder:opacity-40 min-h-[80px]"
                                disabled={isSubmitting}
                            />

                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 glow-hover mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : 'Request Appointment'}
                            </button>
                        </div>
                    )}
                </form>
            )}
        </div>
    );
};

export default BookingCalendar;
