import { useState } from 'react';
import { Outlet } from 'react-router';

import { AdminSidebar } from '../../features/admin/components/admin-sidebar';

export function AdminLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex font-grotesque-mono">
      <AdminSidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col">
        {/* <AdminHeader /> */}

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
