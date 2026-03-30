// ============================================================
// API Response wrapper
// ============================================================
export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  total: number
  page: number
  limit: number
}

// ============================================================
// Enums
// ============================================================
export type Role = 'ADMIN' | 'VENDOR' | 'USER'
export type AccountStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'SUSPENDED' | 'DELETED'
export type LocationStatus = 'PENDING' | 'APPROVED' | 'REJECTED'
export type NewsStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'NEED_EDIT'
export type NewsType = 'NEWS' | 'EVENT' | 'POLICY'
export type EventStatus = 'UPCOMING' | 'ONGOING' | 'ENDED'
export type DocumentStatus = 'DRAFT' | 'PUBLISHED'

// ============================================================
// Auth
// ============================================================
export interface AuthUser {
  id: string
  email: string
  fullName?: string
  orgName?: string
  representative?: string
  position?: string
  phone?: string
  provinceId?: string
  nationality?: string
  commitmentFileUrl?: string
  assignmentFileUrl?: string
  role: Role
  status: AccountStatus
  avatarUrl?: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  email: string
  password: string
  fullName?: string
  nationality?: string
  orgName?: string
  representative?: string
  phone?: string
  position?: string
  provinceId?: string
  role: 'USER' | 'VENDOR'
}

// ============================================================
// Province & PAI
// ============================================================
export interface Province {
  id: string
  name: string
  code: string
  latitude: number
  longitude: number
  region: string
}

export interface PaiScore {
  id: string
  provinceId: string
  infrastructure: number
  procedure: number
  finance: number
  scenery: number
  workforce: number
  interaction: number
  updatedAt: string
  province?: Province
}

// ============================================================
// Location
// ============================================================
export interface LocationMedia {
  id: string
  locationId: string
  url: string
  type: string
}

export interface LocationCardData {
  rank: number;
  name: string;
  image: string;
  position: "left" | "center" | "right";
}

export interface Location {
  id: string
  name: string
  category: string
  style?: string
  address?: string
  description?: string
  status: LocationStatus
  provinceId: string
  vendorId: string
  createdAt: string
  updatedAt: string
  province?: Province
  media?: LocationMedia[]
}

// ============================================================
// News
// ============================================================
export interface News {
  id: string
  title: string
  content: string
  summary?: string
  author?: string
  coverUrl?: string
  type: NewsType
  eventStatus?: EventStatus
  status: NewsStatus
  rejectionNote?: string
  publishedAt?: string
  createdAt: string
  provinceId?: string
  vendorId: string
  province?: Province
}

// ============================================================
// User & Vendor
// ============================================================
export interface User {
  id: string
  email: string
  fullName: string
  nationality?: string
  role: Role
  status: AccountStatus
  avatarUrl?: string
  createdAt: string
}

export interface Vendor {
  id: string
  email: string
  orgName: string
  representative: string
  position?: string
  phone?: string
  provinceId?: string
  status: AccountStatus
  avatarUrl?: string
  createdAt: string
  province?: Province
}

// ============================================================
// Enterprise
// ============================================================
export interface Enterprise {
  id: string
  name: string
  licenseUrl?: string
  representative?: string
  email?: string
  phone?: string
  status: AccountStatus
  provinceId: string
  createdAt: string
  province?: Province
}

// ============================================================
// Legal & Finance
// ============================================================
export interface LegalDocument {
  id: string
  title: string
  docNumber?: string
  category: string
  fileUrl: string
  issuedAt?: string
  status: DocumentStatus
  pinned: boolean
  viewCount: number
  downloadCount: number
}

export interface FinancePolicy {
  id: string
  title: string
  supportType: string
  condition?: string
  content?: string
  agency?: string
  agencyEmail?: string
  agencyPhone?: string
  provinceId: string
  province?: Province
}

// ============================================================
// Field Support
// ============================================================
export interface FieldContact {
  id: string
  type: string
  scope?: string
  agency?: string
  contactName?: string
  phone?: string
  email?: string
  provinceId: string
  province?: Province
}
