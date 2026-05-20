import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import {
  MessageSquare,
  Send,
  Phone,
  TrendingUp,
  Users,
  Mail,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  Activity,
  BarChart3
} from "lucide-react";

// Mock data for messaging analytics
const messageVolumeData = [
  { date: "Mon", sent: 1247, received: 982 },
  { date: "Tue", sent: 1356, received: 1045 },
  { date: "Wed", sent: 1523, received: 1198 },
  { date: "Thu", sent: 1445, received: 1267 },
  { date: "Fri", sent: 1678, received: 1423 },
  { date: "Sat", sent: 892, received: 723 },
  { date: "Sun", sent: 645, received: 534 },
];

const deliveryRateData = [
  { hour: "00:00", rate: 98.2 },
  { hour: "04:00", rate: 98.5 },
  { hour: "08:00", rate: 99.1 },
  { hour: "12:00", rate: 98.8 },
  { hour: "16:00", rate: 99.3 },
  { hour: "20:00", rate: 98.9 },
];

const recentMessages = [
  { id: 1, from: "+1 555-0123", to: "+1 555-9876", message: "Your order has been confirmed", status: "delivered", time: "2 min ago" },
  { id: 2, from: "+1 555-0456", to: "+1 555-3210", message: "Welcome to our service!", status: "delivered", time: "5 min ago" },
  { id: 3, from: "+1 555-0789", to: "+1 555-6543", message: "Your appointment is tomorrow at 3 PM", status: "sent", time: "8 min ago" },
  { id: 4, from: "+1 555-0147", to: "+1 555-8520", message: "Thanks for signing up!", status: "failed", time: "12 min ago" },
];

interface DashboardContentProps {
  activeTab: string;
  userRole: string;
}

export function DashboardContent({ activeTab, userRole }: DashboardContentProps) {
  // ACL Module
  if (activeTab === "acl") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Admin & ACL</h1>
            <p className="text-muted-foreground">Manage permissions, access control, and visitor registry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">+12 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Permission Groups</CardTitle>
                <Activity className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">5 custom roles</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visitor Entries</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,543</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ACL Permissions Matrix</CardTitle>
                <CardDescription>Configure user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Permission management interface - Configure role-based access controls
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visitor Registry</CardTitle>
                <CardDescription>Track and manage visitor access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Visitor tracking and registration system
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Backlog Module
  if (activeTab === "backlog") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Backlog</h1>
            <p className="text-muted-foreground">Manage tasks, issues, and project backlog</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Backlog Items</CardTitle>
              <CardDescription>Track and prioritize work items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Implement new SMS routing logic", priority: "High", status: "In Progress", assignee: "John Doe" },
                  { title: "Fix payment gateway integration", priority: "Critical", status: "Open", assignee: "Jane Smith" },
                  { title: "Update operator pricing table", priority: "Medium", status: "Review", assignee: "Bob Johnson" },
                  { title: "Add WhatsApp report filters", priority: "Low", status: "Open", assignee: "Unassigned" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <Badge variant={item.priority === "Critical" ? "destructive" : item.priority === "High" ? "default" : "outline"}>
                          {item.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.assignee}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{item.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Finance Module
  if (activeTab === "finance") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Finance</h1>
            <p className="text-muted-foreground">Manage partners, pricing, payments, and commission reports</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Partners</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">12 new this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <AlertCircle className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$8,420</div>
                <p className="text-xs text-muted-foreground">23 transactions</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Partner Management</CardTitle>
                <CardDescription>View and manage partner accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Partner account management and configuration
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMS Buy Prices Markup</CardTitle>
                <CardDescription>Configure pricing and markup rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Price configuration and markup management
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PayPal Payments</CardTitle>
                <CardDescription>Process and track PayPal transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  PayPal payment processing and reconciliation
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partner Commission Report</CardTitle>
                <CardDescription>View partner earnings and commissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Commission tracking and reporting for partners
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Reports Module
  if (activeTab === "reports") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Reports</h1>
            <p className="text-muted-foreground">Comprehensive reporting and analytics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "SMS Summary Report", description: "Overview of SMS traffic and delivery" },
              { name: "Transaction Report", description: "Detailed transaction history and billing" },
              { name: "Contracts Report", description: "Customer contract status and renewals" },
              { name: "Credit Tracker Report", description: "Credit usage and balance tracking" },
              { name: "Voice Calls Report", description: "Voice call analytics and metrics" },
              { name: "VIP Accounts Report", description: "VIP customer activity and engagement" },
              { name: "PayPal Pending Bay", description: "Pending PayPal transaction queue" },
              { name: "WhatsApp Report", description: "WhatsApp messaging statistics" }
            ].map((report, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    {report.name}
                  </CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">View Report</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Route Management Module
  if (activeTab === "routes") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Route Management</h1>
            <p className="text-muted-foreground">Manage operators, pricing, routes, and suppliers</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Operators</CardTitle>
                <CardDescription>Configure mobile network operators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Network operator configuration and management
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Import Operator Price</CardTitle>
                <CardDescription>Bulk import operator pricing data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Import and update operator pricing tables
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Route Configuration</CardTitle>
                <CardDescription>Set up and manage message routing rules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Configure routing logic and fallback rules
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Supplier Management</CardTitle>
                <CardDescription>Manage SMS gateway suppliers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Supplier configuration and relationship management
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Sales Module
  if (activeTab === "sales") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Sales</h1>
            <p className="text-muted-foreground">Sales management and customer acquisition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-muted-foreground">+45 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Activity className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23.5%</div>
                <p className="text-xs text-muted-foreground">+2.3% improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
                <Users className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground">$450K pipeline</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sales Pipeline</CardTitle>
              <CardDescription>Track deals and opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Sales opportunity tracking and pipeline management
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // SDM Tools Module
  if (activeTab === "sdm") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">SDM Tools</h1>
            <p className="text-muted-foreground">Service Delivery Management tools and configuration</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sender ID Management</CardTitle>
                <CardDescription>Configure and manage sender IDs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Sender ID registration, approval, and management
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Message Pattern Filters (Spam Filter)</CardTitle>
                <CardDescription>Configure content filtering rules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Spam detection and message pattern filtering
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MXT SMS Pricing</CardTitle>
                <CardDescription>Manage MXT SMS pricing configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  MXT pricing tables and rate management
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Virtual Number Management</CardTitle>
                <CardDescription>Manage virtual phone numbers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Virtual number provisioning and configuration
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Marketing Module
  if (activeTab === "marketing") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Marketing</h1>
            <p className="text-muted-foreground">Marketing campaigns and promotional tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <Send className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">3 scheduled</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reach</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45.2K</div>
                <p className="text-xs text-muted-foreground">Total audience</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <p className="text-xs text-muted-foreground">Average rate</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Campaigns</CardTitle>
              <CardDescription>Create and manage marketing initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Campaign management and promotional content
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Help Module
  if (activeTab === "help") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Help Center</h1>
            <p className="text-muted-foreground">Documentation, support, and resources</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>User guides and API documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Browse Docs</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Submit and track support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">View Tickets</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQs</CardTitle>
                <CardDescription>Frequently asked questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">View FAQs</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Internal Links Module
  if (activeTab === "internal") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Internal Links</h1>
            <p className="text-muted-foreground">Quick access to internal resources and tools</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Internal Resources</CardTitle>
              <CardDescription>Access internal systems and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Internal navigation and resource directory
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Tech Module
  if (activeTab === "tech") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Tech</h1>
            <p className="text-muted-foreground">Technical tools and system configuration</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Technical system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  System configuration and technical parameters
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Management</CardTitle>
                <CardDescription>API keys and integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  API key management and integration configuration
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logs & Monitoring</CardTitle>
                <CardDescription>System logs and performance monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Application logs and system health monitoring
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Task Management Module
  if (activeTab === "tasks") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Task Management</h1>
            <p className="text-muted-foreground">Track and manage team tasks and workflows</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Tasks</CardTitle>
                <Clock className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34</div>
                <p className="text-xs text-muted-foreground">8 due today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                <Activity className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Across 5 projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Task List</CardTitle>
              <CardDescription>View and manage all tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Task tracking and workflow management
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Messages Tab
  if (activeTab === "messages") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Messages</h1>
            <p className="text-muted-foreground">View and manage all your messaging activity</p>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest message activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((msg) => (
                  <div key={msg.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium">{msg.from}</span>
                        <span className="text-muted-foreground">→</span>
                        <span className="text-sm text-muted-foreground">{msg.to}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{msg.message}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                      <Badge
                        variant={msg.status === "delivered" ? "default" : msg.status === "sent" ? "secondary" : "destructive"}
                      >
                        {msg.status === "delivered" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {msg.status === "sent" && <Clock className="h-3 w-3 mr-1" />}
                        {msg.status === "failed" && <AlertCircle className="h-3 w-3 mr-1" />}
                        {msg.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Activity Tab
  if (activeTab === "activity") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Activity</h1>
            <p className="text-muted-foreground">Track all messaging activity and engagement metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Messages</CardTitle>
                <Send className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <Activity className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">2 ending today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.5%</div>
                <p className="text-xs text-muted-foreground">+4.2% this week</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest events across all channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { event: "Campaign 'Flash Sale' sent to 5,432 contacts", time: "2 min ago", type: "campaign" },
                  { event: "New contact added: john.doe@example.com", time: "15 min ago", type: "contact" },
                  { event: "Template 'Order Confirmation' updated", time: "1 hour ago", type: "template" },
                  { event: "API request from Integration 'Shopify'", time: "2 hours ago", type: "api" },
                  { event: "Message failed: +1 555-0987", time: "3 hours ago", type: "error" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        item.type === "campaign" ? "bg-blue-500" :
                        item.type === "contact" ? "bg-green-500" :
                        item.type === "template" ? "bg-purple-500" :
                        item.type === "api" ? "bg-orange-500" : "bg-red-500"
                      }`}></div>
                      <span className="text-sm">{item.event}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Campaigns Tab
  if (activeTab === "campaigns") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Campaigns</h1>
              <p className="text-muted-foreground">Create and manage messaging campaigns</p>
            </div>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </div>

          <div className="grid gap-6">
            {[
              { name: "Summer Sale 2026", status: "active", sent: 12543, delivered: 12489, opened: 8234, scheduled: "May 18, 2026" },
              { name: "Welcome Series", status: "active", sent: 8765, delivered: 8721, opened: 6543, scheduled: "Ongoing" },
              { name: "Product Launch", status: "scheduled", sent: 0, delivered: 0, opened: 0, scheduled: "May 25, 2026" },
              { name: "Customer Feedback", status: "completed", sent: 5432, delivered: 5401, opened: 3210, scheduled: "May 10, 2026" }
            ].map((campaign, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{campaign.name}</CardTitle>
                      <CardDescription>Scheduled: {campaign.scheduled}</CardDescription>
                    </div>
                    <Badge variant={campaign.status === "active" ? "default" : campaign.status === "scheduled" ? "secondary" : "outline"}>
                      {campaign.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Sent</p>
                      <p className="text-2xl font-bold">{campaign.sent.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Delivered</p>
                      <p className="text-2xl font-bold">{campaign.delivered.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Opened</p>
                      <p className="text-2xl font-bold">{campaign.opened.toLocaleString()}</p>
                    </div>
                  </div>
                  {campaign.status === "active" && (
                    <div className="mt-4">
                      <Progress value={(campaign.delivered / campaign.sent) * 100} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Contacts Tab
  if (activeTab === "contacts") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Contacts</h1>
              <p className="text-muted-foreground">Manage your customer contact lists</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Add Contact
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-10" />
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  { name: "John Doe", email: "john.doe@example.com", phone: "+1 555-0123", status: "active", tags: ["VIP", "Newsletter"] },
                  { name: "Jane Smith", email: "jane.smith@example.com", phone: "+1 555-0456", status: "active", tags: ["Newsletter"] },
                  { name: "Bob Johnson", email: "bob.j@example.com", phone: "+1 555-0789", status: "inactive", tags: ["Customer"] },
                  { name: "Alice Brown", email: "alice.b@example.com", phone: "+1 555-0147", status: "active", tags: ["VIP", "Partner"] },
                  { name: "Charlie Wilson", email: "charlie.w@example.com", phone: "+1 555-0258", status: "active", tags: ["Newsletter", "Customer"] }
                ].map((contact, idx) => (
                  <div key={idx} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{contact.name}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground">{contact.email}</span>
                          <span className="text-sm text-muted-foreground">{contact.phone}</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          {contact.tags.map((tag, tagIdx) => (
                            <Badge key={tagIdx} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={contact.status === "active" ? "default" : "secondary"}>
                          {contact.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Numbers Tab
  if (activeTab === "numbers") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Phone Numbers</h1>
              <p className="text-muted-foreground">Manage your messaging phone numbers</p>
            </div>
            <Button>
              <Phone className="h-4 w-4 mr-2" />
              Buy Number
            </Button>
          </div>

          <div className="grid gap-6">
            {[
              { number: "+1 (555) 123-4567", type: "SMS", country: "United States", status: "active", messages: 12543 },
              { number: "+1 (555) 234-5678", type: "SMS/Voice", country: "United States", status: "active", messages: 8765 },
              { number: "+44 20 7123 4567", type: "SMS", country: "United Kingdom", status: "active", messages: 5432 },
              { number: "+1 (555) 345-6789", type: "SMS", country: "United States", status: "inactive", messages: 0 }
            ].map((num, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{num.number}</CardTitle>
                      <CardDescription>{num.country} • {num.type}</CardDescription>
                    </div>
                    <Badge variant={num.status === "active" ? "default" : "secondary"}>
                      {num.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Messages this month</p>
                      <p className="text-2xl font-bold">{num.messages.toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Configure</Button>
                      <Button variant="outline" size="sm">Release</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Templates Tab
  if (activeTab === "templates") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Message Templates</h1>
              <p className="text-muted-foreground">Create and manage reusable message templates</p>
            </div>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              New Template
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Order Confirmation", category: "Transactional", content: "Hi {{name}}, your order #{{order_id}} has been confirmed!", uses: 1234 },
              { name: "Welcome Message", category: "Marketing", content: "Welcome to our service, {{name}}! We're excited to have you.", uses: 856 },
              { name: "Appointment Reminder", category: "Notifications", content: "Reminder: Your appointment is on {{date}} at {{time}}.", uses: 643 },
              { name: "Shipping Update", category: "Transactional", content: "Your order #{{order_id}} has been shipped! Track: {{tracking}}", uses: 2341 },
              { name: "Password Reset", category: "Security", content: "Reset your password using this code: {{code}}. Valid for 10 minutes.", uses: 432 },
              { name: "Promotional Offer", category: "Marketing", content: "Special offer for you, {{name}}! Get {{discount}}% off today.", uses: 1876 }
            ].map((template, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{template.name}</CardTitle>
                    <Badge variant="outline">{template.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 p-3 bg-muted rounded-lg font-mono">
                    {template.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Used {template.uses.toLocaleString()} times</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Use</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Settings Tab
  if (activeTab === "settings") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-4xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Settings</h1>
            <p className="text-muted-foreground">Configure your account and preferences</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input placeholder="Your Company" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Email notifications for new messages",
                  "SMS alerts for failed deliveries",
                  "Weekly performance reports",
                  "Campaign completion notifications"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm">{item}</span>
                    <input type="checkbox" defaultChecked={idx < 2} className="w-4 h-4" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline">Change Password</Button>
                <Button variant="outline">Enable Two-Factor Authentication</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Billing Tab
  if (activeTab === "billing") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-4xl">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">Billing</h1>
            <p className="text-muted-foreground">Manage your billing and usage</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>You are on the Professional plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-3xl font-bold">$99/month</p>
                    <p className="text-sm text-muted-foreground">Billed monthly</p>
                  </div>
                  <Button>Upgrade Plan</Button>
                </div>
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Messages this month</span>
                    <span className="font-medium">8,786 / 10,000</span>
                  </div>
                  <Progress value={87.86} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage This Month</CardTitle>
                <CardDescription>Current billing period usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">SMS Messages</span>
                    <span className="text-sm font-medium">$43.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Voice Minutes</span>
                    <span className="text-sm font-medium">$12.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Additional Numbers</span>
                    <span className="text-sm font-medium">$6.00</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">$61.70</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Manage your payment information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Default for remaining tabs
  if (activeTab !== "home") {
    return (
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-4xl">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">
              {activeTab === "senders" && "Senders"}
              {activeTab === "voice" && "Voice"}
              {activeTab === "reports" && "Reports"}
              {activeTab === "integrations" && "Integrations"}
              {activeTab === "developers" && "Developers"}
              {activeTab === "help" && "Help"}
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {activeTab === "senders" && "Configure sender IDs and manage your messaging identities."}
              {activeTab === "voice" && "Manage voice calling features and voice message capabilities."}
              {activeTab === "reports" && "Access detailed analytics and reports on messaging performance."}
              {activeTab === "integrations" && "Connect third-party tools and services to enhance your messaging platform."}
              {activeTab === "developers" && "Access API documentation, SDKs, and developer resources."}
              {activeTab === "help" && "Get help, access documentation, and contact support."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Home Dashboard
  return (
    <div className="flex-1 p-8 bg-slate-50">
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Messaging Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your messaging performance and customer engagement
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
              <Send className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,786</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+18.2%</span> from last week
              </p>
              <div className="mt-2">
                <Progress value={72} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.7%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.3%</span> from last week
              </p>
              <div className="mt-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Excellent
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Contacts</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,453</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+245</span> new this week
              </p>
              <div className="mt-2">
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">64.3%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+5.1%</span> from last week
              </p>
              <div className="mt-2">
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  Above average
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Message Volume Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Message Volume
              </CardTitle>
              <CardDescription>
                Messages sent and received over the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={messageVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="sent"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                      name="Sent"
                    />
                    <Area
                      type="monotone"
                      dataKey="received"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                      name="Received"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Rate */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Delivery Rate
              </CardTitle>
              <CardDescription>
                Message delivery success rate over 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={deliveryRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis domain={[97, 100]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#22c55e"
                      strokeWidth={3}
                      name="Delivery Rate %"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest messaging events and notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Campaign "Summer Sale" completed</p>
                    <p className="text-xs text-muted-foreground">2,456 messages sent • 5 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New contact list imported</p>
                    <p className="text-xs text-muted-foreground">345 contacts added • 15 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Template "Welcome Message" updated</p>
                    <p className="text-xs text-muted-foreground">By John Doe • 1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">API key regenerated</p>
                    <p className="text-xs text-muted-foreground">Security update • 2 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>
                Key messaging performance indicators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Response Time</span>
                <div className="flex items-center gap-2">
                  <Progress value={85} className="w-20 h-2" />
                  <span className="text-sm font-medium">2.3 min</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Opt-out Rate</span>
                <div className="flex items-center gap-2">
                  <Progress value={3} className="w-20 h-2" />
                  <span className="text-sm font-medium">0.3%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Click-through Rate</span>
                <div className="flex items-center gap-2">
                  <Progress value={42} className="w-20 h-2" />
                  <span className="text-sm font-medium">42%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Customer Satisfaction</span>
                <div className="flex items-center gap-2">
                  <Progress value={92} className="w-20 h-2" />
                  <span className="text-sm font-medium">4.6/5.0</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t">
                <Button className="w-full">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Detailed Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}