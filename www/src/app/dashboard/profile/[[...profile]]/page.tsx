import { UserProfile } from '@clerk/nextjs';

export default function ProfilePage() {
    return (
        <section className="py-2 max-sm:py-1 max-w-screen-lg mx-auto">
            <UserProfile path="/dashboard/profile" />
        </section>
    );
}
