'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Search, Package, MapPin, Calendar, Clock, Ship, Truck,
  Weight, Box, Layers, ChevronDown, ChevronUp, FileText,
  Container, User, Building, Phone, Mail, CheckCircle,
  AlertCircle, XCircle, Download, QrCode, Shield, Activity,
  Award, Send, Play, Pause, Ban, RotateCcw, Flag, Home,
  RefreshCw, Undo2, Copy, Share2,
  ShipIcon,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { toast } from 'react-toastify';
import { trackByNumber } from '@/services/booking'; 
import { PDFDownloadLink } from '@react-pdf/renderer';
import { TrackingPDF } from '@/components/trackingPdf';

// ==================== STATUS CONFIG ====================
const STATUS_CONFIG = {
  booking: { label: 'Booking', color: 'bg-gray-100 text-gray-600', icon: Package, progress: 5, order: 0, stage: 'pending' },
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800', icon: Package, progress: 10, order: 1, stage: 'pending' },
  received_at_warehouse: { label: 'Received at Warehouse', color: 'bg-orange-100 text-orange-800', icon: Building, progress: 14, order: 2, stage: 'warehouse' },
  picked_up_from_warehouse: { label: 'Picked up from Warehouse', color: 'bg-blue-100 text-blue-800', icon: Truck, progress: 20, order: 3, stage: 'warehouse' },
  loaded_into_container: { label: 'Loaded into Container', color: 'bg-blue-200 text-blue-800', icon: Container, progress: 30, order: 4, stage: 'dispatch' },
  container_sealed: { label: 'Container Sealed', color: 'bg-blue-300 text-blue-900', icon: Shield, progress: 35, order: 5, stage: 'dispatch' },
  departed_port_of_origin: { label: 'Departed Port of Origin', color: 'bg-orange-100 text-orange-800', icon: Ship, progress: 40, order: 6, stage: 'transit' },
  in_transit_sea_freight: { label: 'In Transit (Sea Freight)', color: 'bg-amber-100 text-amber-800', icon: Ship, progress: 50, order: 7, stage: 'transit' },
  arrived_at_destination_port: { label: 'Arrived at Destination Port', color: 'bg-green-100 text-green-800', icon: Flag, progress: 60, order: 8, stage: 'arrival' },
  under_customs_clearance: { label: 'Under Customs Clearance', color: 'bg-blue-100 text-blue-800', icon: Shield, progress: 70, order: 9, stage: 'customs' },
  customs_cleared: { label: 'Customs Cleared', color: 'bg-emerald-100 text-emerald-800', icon: Shield, progress: 80, order: 10, stage: 'customs' },
  unloaded_from_vessel: { label: 'Unloaded from Vessel', color: 'bg-emerald-100 text-emerald-800', icon: Container, progress: 85, order: 11, stage: 'customs' },
  out_for_delivery: { label: 'Out for Delivery', color: 'bg-sky-100 text-sky-800', icon: Truck, progress: 90, order: 12, stage: 'delivery' },
  delivered: { label: 'Delivered', color: 'bg-green-600 text-white', icon: CheckCircle, progress: 95, order: 13, stage: 'delivery' },
  completed: { label: 'Completed', color: 'bg-green-800 text-white', icon: CheckCircle, progress: 100, order: 16, stage: 'completed' },
  on_hold: { label: 'On Hold', color: 'bg-gray-100 text-gray-800', icon: Pause, progress: 50, order: 14, stage: 'hold' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800', icon: Ban, progress: 0, order: 15, stage: 'cancelled' },
  returned: { label: 'Returned', color: 'bg-red-100 text-red-800', icon: RotateCcw, progress: 100, order: 16, stage: 'return' },
  return_requested: { label: 'Return Requested', color: 'bg-red-100 text-red-700', icon: Undo2, progress: 0, order: 17, stage: 'return', hideProgress: true },
  return_approved: { label: 'Return Approved', color: 'bg-purple-50 text-purple-700', icon: ThumbsUp, progress: 100, order: 18, stage: 'return' },
  return_rejected: { label: 'Return Rejected', color: 'bg-red-50 text-red-700', icon: ThumbsDown, progress: 0, order: 19, stage: 'return', hideProgress: true },
  return_initiated: { label: 'Return Initiated', color: 'bg-purple-50 text-purple-700', icon: Undo2, progress: 50, order: 20, stage: 'return' },
  return_completed: { label: 'Return Completed', color: 'bg-green-50 text-green-700', icon: CheckCircle, progress: 100, order: 21, stage: 'return' }
};

// ==================== CANONICAL 16-STATUS STEPS ====================
// Timeline shows EXACTLY these 16 statuses in this order
const CANONICAL_STATUS_STEPS = [
  { status: 'booking', label: 'Booking', icon: Package, order: 0 },
  { status: 'pending', label: 'Pending', icon: Package, order: 1 },
  { status: 'received_at_warehouse', label: 'Received at Warehouse', icon: Building, order: 2 },
  { status: 'picked_up_from_warehouse', label: 'Picked up from Warehouse', icon: Truck, order: 3 },
  { status: 'loaded_into_container', label: 'Loaded into Container', icon: Container, order: 4 },
  { status: 'container_sealed', label: 'Container Sealed', icon: Shield, order: 5 },
  { status: 'departed_port_of_origin', label: 'Departed Port of Origin', icon: Ship, order: 6 },
  { status: 'in_transit_sea_freight', label: 'In Transit (Sea Freight)', icon: Ship, order: 7 },
  { status: 'arrived_at_destination_port', label: 'Arrived at Destination Port', icon: Flag, order: 8 },
  { status: 'under_customs_clearance', label: 'Under Customs Clearance', icon: Shield, order: 9 },
  { status: 'customs_cleared', label: 'Customs Cleared', icon: Shield, order: 10 },
  { status: 'unloaded_from_vessel', label: 'Unloaded from Vessel', icon: Container, order: 11 },
  { status: 'out_for_delivery', label: 'Out for Delivery', icon: Truck, order: 12 },
  { status: 'delivered', label: 'Delivered', icon: CheckCircle, order: 13 },
  { status: 'completed', label: 'Completed', icon: CheckCircle, order: 16 },
  { status: 'on_hold', label: 'On Hold', icon: Pause, order: 14 },
  { status: 'cancelled', label: 'Cancelled', icon: Ban, order: 15 },
  { status: 'returned', label: 'Returned', icon: RotateCcw, order: 16 }
];

const TIMELINE_STATUS_ALIASES = {
  booking_requested: 'booking',
  booking: 'booking',
  draft: 'booking',
  pending_consolidation: 'pending',
  pending: 'pending',
  in_progress: 'pending',
  received_at_warehouse: 'received_at_warehouse',
  received: 'received_at_warehouse',
  warehouse: 'received_at_warehouse',
  picked: 'picked_up_from_warehouse',
  picked_up: 'picked_up_from_warehouse',
  consolidated: 'picked_up_from_warehouse',
  loaded_into_container: 'loaded_into_container',
  loaded_in_container: 'loaded_into_container',
  ready_for_dispatch: 'loaded_into_container',
  loaded: 'container_sealed',
  sealed: 'container_sealed',
  container_sealed: 'container_sealed',
  container_loaded: 'loaded_into_container',
  dispatched: 'departed_port_of_origin',
  container_dispatched: 'departed_port_of_origin',
  departed: 'departed_port_of_origin',
  container_departed: 'departed_port_of_origin',
  in_transit: 'in_transit_sea_freight',
  container_in_transit: 'in_transit_sea_freight',
  sea_freight: 'in_transit_sea_freight',
  transit: 'in_transit_sea_freight',
  arrived: 'arrived_at_destination_port',
  container_arrived: 'arrived_at_destination_port',
  port_arrival: 'arrived_at_destination_port',
  under_customs: 'under_customs_clearance',
  under_customs_clearance: 'under_customs_clearance',
  under_customs_cleared: 'under_customs_clearance',
  customs_clearance: 'customs_cleared',
  customs_cleared: 'customs_cleared',
  cleared: 'customs_cleared',
  customs_inspection: 'under_customs_clearance',
  unloaded: 'unloaded_from_vessel',
  unloaded_from_vessel: 'unloaded_from_vessel',
  container_unloaded: 'unloaded_from_vessel',
  out_for_deliwery: 'out_for_delivery',
  out_delivery: 'out_for_delivery',
  delivery: 'out_for_delivery',
  out_for_delivery: 'out_for_delivery',
  delivered: 'delivered',
  completion: 'completed',
  completed: 'completed',
  on_hold: 'on_hold',
  hold: 'on_hold',
  cancelled: 'cancelled',
  cancel: 'cancelled',
  returned: 'returned',
  return: 'returned',
  return_completed: 'return_completed',
  return_requested: 'return_requested',
  return_approved: 'return_approved',
  return_rejected: 'return_rejected',
  return_initiated: 'return_initiated'
};

const normalizeTimelineStatus = (status) => {
  if (!status) return '';
  const lower = status.toLowerCase();
  return TIMELINE_STATUS_ALIASES[lower] || lower;
};

const MANUAL_TIMELINE_LABELS = {
  booking_requested: 'Booking Created'
};

// Case-wise buttons: For manual/new bookings, start from "Picked up from Warehouse" (skip Booking & Pending)
const getActionButtonsForStatus = (source, currentStatusOrder) => {
  // For manual/new bookings: buttons start from Picked up from Warehouse (order 2)
  if (source === 'manual' || source === 'new') {
    return CANONICAL_STATUS_STEPS.filter(step => step.order >= 2 && step.order > currentStatusOrder);
  }
  // For other cases: buttons progress through all statuses after current
  return CANONICAL_STATUS_STEPS.filter(step => step.order > currentStatusOrder);
};

export default function TrackingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [trackingNumber, setTrackingNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);
  const [showAllPackages, setShowAllPackages] = useState(false);
  const [expandedPackages, setExpandedPackages] = useState(new Set());
  const [activeTab, setActiveTab] = useState('timeline');
  const [timelineView, setTimelineView] = useState('newToOld');
  const [shareSuccess, setShareSuccess] = useState(false);
  const [showRouteDetails, setShowRouteDetails] = useState(false);

  // Get tracking number from URL on load
  const handleTrackFromUrl = useCallback(async (trackingNum) => {
    setLoading(true);
    setError(null);
    setTrackingData(null);
    
    try {
      const result = await trackByNumber(trackingNum);
      
      if (result.success) {
        const processedData = processTimelineForHoldResume(result.data);
        setTrackingData(processedData);
        toast.success('Tracking data found');
      } else {
        setError(result.message || 'No shipment found with this tracking number');
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch tracking data');
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const trackingParam = searchParams.get('tracking');
    if (trackingParam) {
      setTrackingNumber(trackingParam.toUpperCase());
      // Auto-search if tracking number exists in URL
      handleTrackFromUrl(trackingParam.toUpperCase());
    }
  }, [searchParams, handleTrackFromUrl]);

  const handleTrack = async (e) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast.warning('Please enter a tracking number');
      return;
    }

    // Update URL with tracking number
    const params = new URLSearchParams(searchParams);
    params.set('tracking', trackingNumber.toUpperCase());
    router.push(`/tracking-number?${params.toString()}`, { scroll: false });

    setLoading(true);
    setError(null);
    setTrackingData(null);
    
    try {
      const result = await trackByNumber(trackingNumber);
      
      if (result.success) {
        const processedData = processTimelineForHoldResume(result.data);
        setTrackingData(processedData);
        toast.success('Tracking data found');
      } else {
        setError(result.message || 'No shipment found with this tracking number');
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch tracking data');
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Copy shareable link to clipboard
  const handleCopyShareLink = () => {
    const shareUrl = `${window.location.origin}/tracking-number?tracking=${trackingNumber}`;
    navigator.clipboard.writeText(shareUrl);
    setShareSuccess(true);
    toast.success('Shareable link copied to clipboard!');
    setTimeout(() => setShareSuccess(false), 3000);
  };

  // Toggle package expansion
  const togglePackageExpanded = (index) => {
    const newExpanded = new Set(expandedPackages);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPackages(newExpanded);
  };

  // Share using Web Share API (mobile)
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/tracking-number?tracking=${trackingNumber}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Shipment Tracking',
          text: `Track your shipment: ${trackingNumber}`,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
        handleCopyShareLink();
      }
    } else {
      handleCopyShareLink();
    }
  };

  // Process hold/resume events
  const processTimelineForHoldResume = (data) => {
    if (!data?.timeline) return data;
    
    let timeline = [...data.timeline];
    let processedEvents = [];
    let currentStatus = null;
    let statusBeforeHold = null;
    let isOnHold = false;
    let holdEventEncountered = false;
    let originalStatusBeforeHold = null;
    
    // Sort timeline chronologically
    timeline.sort((a, b) => {
      const dateA = new Date(a.date || a.timestamp || a.createdAt || 0);
      const dateB = new Date(b.date || b.timestamp || b.createdAt || 0);
      return dateA - dateB;
    });
    
    // First pass: Find the status BEFORE any hold event
    for (let i = 0; i < timeline.length; i++) {
      const event = timeline[i];
      const status = event.status?.toLowerCase() || '';
      const description = event.description?.toLowerCase() || '';
      
      if (status === 'on_hold' || description.includes('on hold')) {
        if (!holdEventEncountered && currentStatus && currentStatus !== 'pending') {
          statusBeforeHold = currentStatus;
          originalStatusBeforeHold = currentStatus;
          holdEventEncountered = true;
        }
      } 
      else if (status !== 'on_hold' && !status.includes('hold')) {
        if (!(isOnHold && status === 'pending')) {
          currentStatus = status;
        }
      }
      
      if (status === 'on_hold' || description.includes('on hold')) {
        isOnHold = true;
      } else if (description.includes('resumed') || status.includes('resumed')) {
        isOnHold = false;
      }
    }
    
    // Reset for second pass
    currentStatus = null;
    isOnHold = false;
    holdEventEncountered = false;
    let restoredStatus = null;
    let pendingEvent = null;
    let bookingRequestedEvent = null;
    
    // Second pass: Process events for display
    for (let i = 0; i < timeline.length; i++) {
      const event = timeline[i];
      const status = normalizeTimelineStatus(event.displayStatus || event.status?.toLowerCase() || '');
      const description = event.description?.toLowerCase() || '';
      
      // Booking Requested event
      if (status === 'booking') {
        bookingRequestedEvent = {
          ...event,
          mappedStatus: 'booking',
          originalStatus: event.status,
          isHoldEvent: false,
          isBookingRequest: true,
          date: event.date || event.timestamp || event.createdAt || new Date().toISOString()
        };
        continue;
      }
      
      // On Hold event
      if (status === 'on_hold' || description.includes('on hold')) {
        if (!holdEventEncountered) {
          if (currentStatus && currentStatus !== 'pending') {
            statusBeforeHold = currentStatus;
          }
          isOnHold = true;
          holdEventEncountered = true;
          
          processedEvents.push({
            ...event,
            isHoldEvent: true,
            statusBeforeHold: statusBeforeHold,
            originalStatus: event.status,
            mappedStatus: 'on_hold'
          });
        }
        continue;
      }
      
      // Resume event
      else if (description.includes('resumed from hold') || status.includes('resumed')) {
        isOnHold = false;
        
        if (statusBeforeHold && statusBeforeHold !== 'pending') {
          restoredStatus = statusBeforeHold;
          
          const restoredEvent = {
            ...event,
            status: statusBeforeHold,
            displayStatus: statusBeforeHold,
            mappedStatus: statusBeforeHold,
            description: `Shipment resumed from hold. Status restored to ${statusBeforeHold.replace(/_/g, ' ')}. ${event.description || ''}`,
            isResumeEvent: true,
            restoredFromHold: true,
            originalStatus: statusBeforeHold
          };
          processedEvents.push(restoredEvent);
          currentStatus = statusBeforeHold;
          statusBeforeHold = null;
        } else if (originalStatusBeforeHold) {
          restoredStatus = originalStatusBeforeHold;
          const restoredEvent = {
            ...event,
            status: originalStatusBeforeHold,
            displayStatus: originalStatusBeforeHold,
            mappedStatus: originalStatusBeforeHold,
            description: `Shipment resumed from hold. Status restored to ${originalStatusBeforeHold.replace(/_/g, ' ')}. ${event.description || ''}`,
            isResumeEvent: true,
            restoredFromHold: true,
            originalStatus: originalStatusBeforeHold
          };
          processedEvents.push(restoredEvent);
          currentStatus = originalStatusBeforeHold;
          originalStatusBeforeHold = null;
        }
        continue;
      }
      
      // Normal events
      else {
        if (status === 'pending' && currentStatus && currentStatus !== 'pending') {
          continue;
        }
        
        if (status === 'pending' && !currentStatus) {
          pendingEvent = event;
          continue;
        }
        
        currentStatus = status;
        
        processedEvents.push({
          ...event,
          mappedStatus: status,
          originalStatus: event.status,
          isHoldEvent: false
        });
      }
    }
    
    // Add booking_requested at the beginning
    if (bookingRequestedEvent) {
      let earliestDate = new Date();
      if (processedEvents.length > 0) {
        const firstEventDate = processedEvents[0].date || processedEvents[0].timestamp || processedEvents[0].createdAt;
        if (firstEventDate) {
          earliestDate = new Date(firstEventDate);
        }
      }
      const bookingDate = new Date(earliestDate);
      bookingDate.setMinutes(bookingDate.getMinutes() - 2);
      
      processedEvents.unshift({
        ...bookingRequestedEvent,
        date: bookingDate.toISOString(),
        timestamp: bookingDate.toISOString(),
        mappedStatus: 'booking',
        isBookingRequest: true
      });
    }
    
    // Add pending event ONLY at the very beginning if no other events exist
    if (pendingEvent && processedEvents.length === 0) {
      processedEvents.unshift({
        ...pendingEvent,
        mappedStatus: 'pending',
        originalStatus: pendingEvent.status
      });
    }
    
    // Clean up: Remove any 'pending' events that appear after real statuses
    processedEvents = processedEvents.filter((event, index) => {
      const mappedStatus = event.mappedStatus || event.status?.toLowerCase() || '';
      if (mappedStatus === 'pending' && index > 0) {
        const hasNonPendingBefore = processedEvents.slice(0, index).some(e => {
          const s = e.mappedStatus || e.status?.toLowerCase() || '';
          return s !== 'pending' && s !== 'booking_requested';
        });
        if (hasNonPendingBefore) {
          return false;
        }
      }
      return true;
    });
    
    return {
      ...data,
      timeline: processedEvents,
      originalTimeline: timeline,
      status: restoredStatus || data.status
    };
  };
  
  const findLastNonHoldStatus = (events) => {
    for (let i = events.length - 1; i >= 0; i--) {
      const status = events[i].status?.toLowerCase() || '';
      if (status !== 'on_hold' && !status.includes('hold')) {
        return status;
      }
    }
    return null;
  };

  const getStatusConfig = (status) => {
    if (!status) {
      return { label: 'Unknown', color: 'bg-gray-100 text-gray-800', icon: Package, progress: 0, order: 999, stage: 'unknown' };
    }

    const normalizedStatus = normalizeTimelineStatus(status);

    if (STATUS_CONFIG[normalizedStatus]) {
      return STATUS_CONFIG[normalizedStatus];
    }

    // Fallback: generate a label from status
    return {
      label: normalizedStatus.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      color: 'bg-gray-100 text-gray-800',
      icon: Package,
      progress: 50,
      order: 50,
      stage: 'unknown'
    };
  };

  const hasReturnStatus = () => {
    if (!trackingData?.timeline) return false;
    return trackingData.timeline.some(event => {
      const status = event.status?.toLowerCase() || '';
      return status.includes('return');
    });
  };

  const getTimelineOldToNew = () => {
    if (!trackingData?.timeline) return [];

    const getEventTimestamp = (event) => {
      const dateValue = event.date || event.timestamp || event.createdAt;
      if (!dateValue) return new Date(0).getTime();
      const time = new Date(dateValue).getTime();
      return Number.isNaN(time) ? new Date(0).getTime() : time;
    };

    // Sort timeline by timestamp (chronological)
    const sortedTimeline = [...trackingData.timeline].sort((a, b) => {
      return getEventTimestamp(a) - getEventTimestamp(b);
    });

    const filteredTimeline = [];
    const seenStatuses = new Set();

    // Process events in chronological order
    for (const event of sortedTimeline) {
      const description = event.description?.toLowerCase() || '';
      const status = normalizeTimelineStatus(event.displayStatus || event.status?.toLowerCase() || '');

      // Skip resume events and removed events
      if (event.isResumeEvent || description.includes('removed from consolidation') || description.includes('removed from queue')) {
        continue;
      }

      // For manual shipments: skip pending, keep everything else
      // For other shipments: skip booking and pending
      if (isManualShipment) {
        if (status === 'pending') continue;
      } else {
        if (status === 'booking' || status === 'pending') continue;
      }

      const mappedStatus = event.isHoldEvent ? 'on_hold' : status;

      // For on_hold status, allow multiple entries (hold and resume events)
      if (mappedStatus === 'on_hold') {
        filteredTimeline.push({
          ...event,
          mappedStatus,
          originalStatus: event.status,
          isHoldEvent: true
        });
        continue;
      }

      // For other statuses, only add each status once
      if (seenStatuses.has(mappedStatus)) {
        continue;
      }

      seenStatuses.add(mappedStatus);
      filteredTimeline.push({
        ...event,
        mappedStatus,
        originalStatus: event.status,
        isHoldEvent: false
      });
    }

    return filteredTimeline;
  };

  const getTimelineNewToOld = () => {
    const timeline = getTimelineOldToNew();
    const reversed = [...timeline].reverse();
    
    // Ensure 'received_at_warehouse' stays at the bottom (last position)
    const receivedAtWarehouseIndex = reversed.findIndex(e => 
      (e.mappedStatus === 'received_at_warehouse' || e.status === 'received_at_warehouse')
    );
    
    if (receivedAtWarehouseIndex > -1 && receivedAtWarehouseIndex < reversed.length - 1) {
      // Remove received_at_warehouse from current position
      const receivedEvent = reversed.splice(receivedAtWarehouseIndex, 1)[0];
      // Add it at the end (bottom)
      reversed.push(receivedEvent);
    }
    
    return reversed;
  };

  const getTimeline = () => {
    return timelineView === 'newToOld' ? getTimelineNewToOld() : getTimelineOldToNew();
  };

  const getShipmentContainers = () => {
    const containers = [];
    const blNumbers = new Set();
    const sealNumbers = new Set();
    const pairs = new Map();

    const addContainerEntry = (containerNumber, sealNumber, blNumber) => {
      if (!containerNumber) return;
      const key = containerNumber;
      if (!pairs.has(key)) {
        pairs.set(key, {
          containerNumber,
          sealNumber: sealNumber || 'N/A',
          blNumber: blNumber || 'N/A'
        });
      }
      const entry = pairs.get(key);

      if (sealNumber) {
        entry.sealNumber = sealNumber;
        sealNumbers.add(sealNumber);
      }

      if (blNumber) {
        const values = Array.isArray(blNumber) ? blNumber : [blNumber];
        values.forEach((b) => {
          if (b) blNumbers.add(b);
        });

        const existingBl = entry.blNumber && entry.blNumber !== 'N/A'
          ? entry.blNumber.split(', ').filter(Boolean)
          : [];
        const combinedBl = [...new Set([...existingBl, ...values.filter(Boolean)])].filter(Boolean);
        entry.blNumber = combinedBl.length > 0 ? combinedBl.join(', ') : entry.blNumber;
      }
    };

    const collectBl = (value) => {
      if (!value) return;
      const values = Array.isArray(value) ? value : [value];
      values.forEach((bl) => {
        if (bl) blNumbers.add(bl);
      });
    };

    if (Array.isArray(trackingData?.timeline)) {
      for (const event of trackingData.timeline) {
        if (event?.containers && Array.isArray(event.containers)) {
          for (const container of event.containers) {
            addContainerEntry(
              container.containerNumber,
              container.sealNumber,
              container.blNumber || container.bl || container.blNumbers
            );
          }
        }

        if (event?.containerNumber) {
          addContainerEntry(event.containerNumber, event.sealNumber, event.blNumber || event.bl || event.blNumbers);
        }

        if (event?.metadata?.containerNumber) {
          const values = Array.isArray(event.metadata.containerNumber)
            ? event.metadata.containerNumber
            : [event.metadata.containerNumber];
          for (const num of values) {
            addContainerEntry(num, event?.metadata?.sealNumber, event?.metadata?.blNumber);
          }
        }

        if (event?.metadata?.sealNumber) {
          const values = Array.isArray(event.metadata.sealNumber)
            ? event.metadata.sealNumber
            : [event.metadata.sealNumber];
          values.forEach((num) => {
            if (num) sealNumbers.add(num);
          });
        }

        if (event?.sealNumber) {
          const values = Array.isArray(event.sealNumber) ? event.sealNumber : [event.sealNumber];
          values.forEach((num) => {
            if (num) sealNumbers.add(num);
          });
        }

        if (event?.blNumber) {
          collectBl(event.blNumber);
        }
      }
    }

    if (trackingData?.consolidation?.containerNumber) {
      addContainerEntry(
        trackingData.consolidation.containerNumber,
        trackingData.consolidation.sealNumber,
        trackingData.consolidation.blNumber
      );
    }

    if (trackingData?.shipmentDetails?.containerNumber) {
      const nums = trackingData.shipmentDetails.containerNumber
        .split(',')
        .map((n) => n.trim())
        .filter(Boolean);
      for (const num of nums) {
        addContainerEntry(num, trackingData.shipmentDetails.sealNumber, trackingData.shipmentDetails.blNumber);
      }
    }

    if (trackingData?.shipmentDetails?.sealNumber) {
      const nums = trackingData.shipmentDetails.sealNumber
        .split(',')
        .map((n) => n.trim())
        .filter(Boolean);
      nums.forEach((num) => {
        if (num) sealNumbers.add(num);
      });
    }

    if (trackingData?.shipmentDetails?.blNumber) {
      collectBl(trackingData.shipmentDetails.blNumber);
    }

    if (trackingData?.containerNumber) {
      const nums = trackingData.containerNumber
        .split(',')
        .map((n) => n.trim())
        .filter(Boolean);
      for (const num of nums) {
        addContainerEntry(num, trackingData.sealNumber, trackingData.blNumber);
      }
    }

    if (trackingData?.sealNumber) {
      const nums = trackingData.sealNumber.split(',').map((n) => n.trim()).filter(Boolean);
      nums.forEach((num) => {
        if (num) sealNumbers.add(num);
      });
    }

    if (trackingData?.blNumber) {
      collectBl(trackingData.blNumber);
    }

    for (const [containerNum, data] of pairs) {
      containers.push({
        containerNumber: data.containerNumber || containerNum,
        sealNumber: data.sealNumber || 'N/A',
        blNumber: data.blNumber || 'N/A'
      });
    }

    if (containers.length === 0 && sealNumbers.size > 0) {
      for (const seal of sealNumbers) {
        containers.push({
          containerNumber: 'N/A',
          sealNumber: seal,
          blNumber: 'N/A'
        });
      }
    }

    if (containers.length === 0 && blNumbers.size > 0) {
      containers.push({
        containerNumber: 'N/A',
        sealNumber: 'N/A',
        blNumber: [...blNumbers].join(', ')
      });
    }

    return containers;
  };

  const getShipmentContainerSummary = () => {
    const containers = getShipmentContainers();
    if (containers.length === 0) return '';

    return containers
      .map((container, index) => `#${index + 1} ${container.containerNumber || 'N/A'} / ${container.sealNumber || 'N/A'}`)
      .join(' • ');
  };

  const getShipmentContainerValue = (kind) => {
    const containers = getShipmentContainers();
    if (containers.length === 0) return 'N/A';

    const values = containers
      .map((container) => container?.[kind] || '')
      .filter(Boolean);

    return values.length > 0 ? values.join(', ') : 'N/A';
  };

  const getShipmentVessels = () => {
    const vessels = [];
    
    // Get from transportLegs array (multiple entries)
    if (Array.isArray(trackingData?.shipmentDetails?.transportLegs) && trackingData.shipmentDetails.transportLegs.length > 0) {
      trackingData.shipmentDetails.transportLegs.forEach(leg => {
        if (leg?.vesselName) vessels.push(leg.vesselName);
      });
    }
    
    // Get from transportLegs at top level
    if (Array.isArray(trackingData?.transportLegs) && trackingData.transportLegs.length > 0) {
      trackingData.transportLegs.forEach(leg => {
        if (leg?.vesselName && !vessels.includes(leg.vesselName)) vessels.push(leg.vesselName);
      });
    }
    
    // Fallback to single transport object
    if (vessels.length === 0) {
      const singleVessel = trackingData?.transport?.vesselName ||
                           trackingData?.shipmentDetails?.vesselName ||
                           trackingData?.consolidation?.vesselName ||
                           trackingData?.consolidation?.carrier?.vesselNumber ||
                           trackingData?.vesselName ||
                           trackingData?.vessel;
      if (singleVessel) vessels.push(singleVessel);
    }
    
    return vessels;
  };

  const getShipmentVoyages = () => {
    const voyages = [];
    
    // Get from transportLegs array (multiple entries)
    if (Array.isArray(trackingData?.shipmentDetails?.transportLegs) && trackingData.shipmentDetails.transportLegs.length > 0) {
      trackingData.shipmentDetails.transportLegs.forEach(leg => {
        if (leg?.voyageNumber) voyages.push(leg.voyageNumber);
      });
    }
    
    // Get from transportLegs at top level
    if (Array.isArray(trackingData?.transportLegs) && trackingData.transportLegs.length > 0) {
      trackingData.transportLegs.forEach(leg => {
        if (leg?.voyageNumber && !voyages.includes(leg.voyageNumber)) voyages.push(leg.voyageNumber);
      });
    }
    
    // Fallback to single transport object
    if (voyages.length === 0) {
      const singleVoyage = trackingData?.transport?.voyageNumber ||
                          trackingData?.shipmentDetails?.voyageNumber ||
                          trackingData?.consolidation?.voyageNumber ||
                          trackingData?.voyageNumber ||
                          trackingData?.voyage;
      if (singleVoyage) voyages.push(singleVoyage);
    }
    
    return voyages;
  };

  const getShipmentVessel = () => {
    const vessels = getShipmentVessels();
    return vessels.length > 0 ? vessels[0] : 'N/A';
  };

  const getShipmentVoyage = () => {
    const voyages = getShipmentVoyages();
    return voyages.length > 0 ? voyages[0] : 'N/A';
  };

  const getShipmentBlValue = () => {
    const containers = getShipmentContainers();
    const values = containers
      .map((container) => container?.blNumber)
      .filter((val) => val && val !== 'N/A');

    if (values.length > 0) {
      return [...new Set(values.join(', ').split(',').map((v) => v.trim()).filter(Boolean))].join(', ');
    }

    const blValues = [];
    if (trackingData?.consolidation?.blNumber) blValues.push(trackingData.consolidation.blNumber);
    if (trackingData?.consolidation?.blNumbers) {
      blValues.push(...trackingData.consolidation.blNumbers.map((v) => v.trim()).filter(Boolean));
    }
    if (trackingData?.shipmentDetails?.blNumber) {
      blValues.push(...trackingData.shipmentDetails.blNumber.split(',').map((v) => v.trim()).filter(Boolean));
    }
    if (trackingData?.blNumber) {
      blValues.push(...(Array.isArray(trackingData.blNumber) ? trackingData.blNumber : [trackingData.blNumber]));
    }
    if (trackingData?.transport?.blNumber) blValues.push(trackingData.transport.blNumber);

    return blValues.length > 0
      ? [...new Set(blValues)].join(', ')
      : 'N/A';
  };

  const getPackageSealNumber = (pkg) => {
    return (
      pkg?.sealNumber ||
      pkg?.sealNo ||
      pkg?.seal ||
      trackingData?.consolidation?.sealNumber ||
      trackingData?.container?.sealNumber ||
      trackingData?.shipmentDetails?.sealNumber ||
      trackingData?.sealNumber ||
      getShipmentContainerValue('sealNumber') ||
      'N/A'
    );
  };

  const getPackageContainerNumber = (pkg) => {
    return (
      pkg?.containerNumber ||
      pkg?.containerNo ||
      pkg?.container ||
      trackingData?.consolidation?.containerNumber ||
      trackingData?.container?.containerNumber ||
      trackingData?.shipmentDetails?.containerNumber ||
      trackingData?.containerNumber ||
      getShipmentContainerValue('containerNumber') ||
      'N/A'
    );
  };

  const getDisplayLocation = (event) => {
    if (!event) return 'Unknown';
    
    const status = event.mappedStatus || event.status?.toLowerCase() || '';
    const destination = trackingData?.destination || 'USA';
    
    if (status === 'return_completed') {
      return 'Customer Location';
    }
    
    if (status === 'return_approved') {
      return 'System';
    }
    
    if (status === 'arrived_at_destination_port' || status === 'arrived') {
      return destination;
    }
    
    if (status === 'customs_cleared' || status.includes('customs')) {
      return destination;
    }
    
    if (status === 'out_for_delivery' || status.includes('delivery')) {
      return destination;
    }
    
    if (status === 'delivered' || status === 'completed') {
      return destination;
    }
    
    if (event.location) return event.location;
    
    if (event.isHoldEvent) {
      return event.location || 'Thailand Warehouse';
    }
    
    if (event.vesselName && event.vesselName !== 'Not assigned') {
      return `Sea - ${event.vesselName}`;
    }
    
    return event.location || 'In Transit';
  };

  const getEventDescription = (event) => {
    const status = event.mappedStatus || event.status?.toLowerCase() || '';
    // Only show container/seal details for container sealed events
    if (status !== 'container_sealed') {
      return '';
    }

    const fallbackContainers = Array.isArray(event.containers) && event.containers.length > 0
      ? event.containers
      : getShipmentContainers();
    const containerNumbers = [];
    const sealNumbers = [];

    if (fallbackContainers.length > 0) {
      fallbackContainers.forEach((container) => {
        if (container?.containerNumber) containerNumbers.push(container.containerNumber);
        if (container?.sealNumber) sealNumbers.push(container.sealNumber);
      });
    }

    if (event?.metadata?.containerNumber) {
      const values = Array.isArray(event.metadata.containerNumber)
        ? event.metadata.containerNumber
        : [event.metadata.containerNumber];
      containerNumbers.push(...values.filter(Boolean));
    }

    if (event?.containerNumber) {
      const values = Array.isArray(event.containerNumber) ? event.containerNumber : [event.containerNumber];
      containerNumbers.push(...values.filter(Boolean));
    }

    if (event?.metadata?.sealNumber) {
      const values = Array.isArray(event.metadata.sealNumber)
        ? event.metadata.sealNumber
        : [event.metadata.sealNumber];
      sealNumbers.push(...values.filter(Boolean));
    }

    if (event?.sealNumber) {
      const values = Array.isArray(event.sealNumber) ? event.sealNumber : [event.sealNumber];
      sealNumbers.push(...values.filter(Boolean));
    }

    const primaryPackage = trackingData?.packages?.[0];
    if (containerNumbers.length === 0 && primaryPackage) {
      const value = getPackageContainerNumber(primaryPackage);
      if (value && value !== 'N/A') containerNumbers.push(value);
    }
    if (sealNumbers.length === 0 && primaryPackage) {
      const value = getPackageSealNumber(primaryPackage);
      if (value && value !== 'N/A') sealNumbers.push(value);
    }

    if (containerNumbers.length === 0 && sealNumbers.length === 0) {
      return '';
    }

    const dedupedContainers = [...new Set(containerNumbers)];
    const dedupedSeals = [...new Set(sealNumbers)];
    const vessels = getShipmentVessels();
    const voyages = getShipmentVoyages();
    const blNumber = getShipmentBlValue();

    return (
      <>
        {dedupedContainers.length > 0 && (
          <>
            <span className="text-red-600">Container:</span> {dedupedContainers.join(', ')}
          </>
        )}
        {dedupedContainers.length > 0 && dedupedSeals.length > 0 && ' '}
        {dedupedSeals.length > 0 && (
          <>
            <span className="text-red-600">Seal:</span> {dedupedSeals.join(', ')}
          </>
        )}
        {(vessels.length > 0 && vessels[0] !== 'N/A') && (
          <>
            <br />
            {vessels.map((v, i) => (
              <div key={`vessel-${i}`}>
                <span className="text-red-600">Vessel{vessels.length > 1 ? ` ${i + 1}` : ''}:</span> {v}
              </div>
            ))}
          </>
        )}
        {(voyages.length > 0 && voyages[0] !== 'N/A') && (
          <>
            <br />
            {voyages.map((v, i) => (
              <div key={`voyage-${i}`}>
                <span className="text-red-600">Voyage{voyages.length > 1 ? ` ${i + 1}` : ''}:</span> {v}
              </div>
            ))}
          </>
        )}
        {(blNumber && blNumber !== 'N/A') && (
          <>
            <br />
            <span className="text-red-600">BL:</span> {blNumber}
          </>
        )}
      </>
    );
  };

  const getRouteOrigin = () => {
    return trackingData?.route?.origin || 
           trackingData?.origin || 
           trackingData?.shipmentDetails?.origin || 
           'China';
  };

  const getRouteDestination = () => {
    return trackingData?.route?.destination || 
           trackingData?.destination || 
           trackingData?.shipmentDetails?.destination || 
           'USA';
  };

  const getCurrentLocation = () => {
    const status = trackingData?.status?.toLowerCase() || '';
    const destination = trackingData?.destination || 'USA';
    
    if (status.includes('return_completed')) return 'Customer Location';
    if (status.includes('return_approved')) return 'System';
    if (trackingData?.hasArrived) return destination;
    if (status.includes('delivered')) return destination;
    if (status.includes('out_for_delivery')) return destination;
    if (status.includes('customs_cleared')) return destination;
    if (status.includes('arrived')) return destination;
    
    const timeline = getTimelineOldToNew();
    if (timeline.length > 0) {
      const latestEvent = timeline[timeline.length - 1];
      const location = getDisplayLocation(latestEvent);
      if (location !== 'Unknown') return location;
    }
    
    return trackingData?.origin || 'In Transit';
  };

  const calculateOverallProgress = () => {
    const timeline = getTimelineOldToNew();
    if (timeline.length === 0) return 0;
    
    const lastEvent = timeline[timeline.length - 1];
    
    if (lastEvent.isHoldEvent) {
      return 50;
    }
    
    const config = getStatusConfig(lastEvent.mappedStatus || lastEvent.status);
    
    if (lastEvent.mappedStatus === 'return_completed' || lastEvent.status?.toLowerCase() === 'return_completed') {
      return 100;
    }
    
    return config.progress;
  };

  const formatAddress = (address) => {
    if (!address) return 'N/A';
    if (typeof address === 'string') return address;
    
    const parts = [];
    if (address.addressLine1) parts.push(address.addressLine1);
    if (address.city) parts.push(address.city);
    if (address.state) parts.push(address.state);
    if (address.country) parts.push(address.country);
    
    return parts.length > 0 ? parts.join(', ') : 'N/A';
  };

  const formatStatus = (status) => {
    const config = getStatusConfig(status);
    return config.label;
  };

  const getStatusColor = (status) => {
    return getStatusConfig(status).color;
  };

  const getStatusIcon = (status) => {
    const IconComponent = getStatusConfig(status).icon;
    return IconComponent;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const formatTimeOnly = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '';
    }
  };

  // Format just the date part without timezone conversion
  const formatDateOnly = (dateString) => {
    if (!dateString) return 'N/A';
    
    // If it's in YYYY-MM-DD format, parse it directly
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      const [year, month, day] = dateString.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
    }
    
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const getEstimatedDeparture = () => {
    return trackingData?.dates?.estimatedDeparture || 
           trackingData?.estimatedDeparture || 
           null;
  };

  const getEstimatedArrival = () => {
    return trackingData?.dates?.estimatedArrival || 
           trackingData?.estimatedArrival || 
           trackingData?.eta || 
           null;
  };

  const getLastUpdate = () => {
    const timeline = getTimelineNewToOld();
    if (timeline.length > 0) {
      return timeline[0].formattedDate || formatDate(timeline[0].date || timeline[0].timestamp);
    }
    return formatDate(new Date());
  };

  const StatusIcon = ({ status }) => {
    const IconComponent = getStatusIcon(status);
    return <IconComponent className="h-4 w-4" />;
  };

  const currentStatusConfig = getStatusConfig(trackingData?.status);
  const hasReturn = hasReturnStatus();
  const isManualShipment = trackingData?.source === 'manual' || trackingData?.source === 'booking' || trackingData?.type === 'booking';
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/tracking-number?tracking=${trackingNumber}` : '';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-300 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Track Your Shipment</h1>
          <p className="text-xl opacity-90">
            Enter your tracking number to get real-time updates
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-3xl mx-auto px-4 -mt-8">
        <form onSubmit={handleTrack} className="bg-white rounded-xl shadow-xl p-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center px-4">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                placeholder="Enter tracking number (e.g., CLG-BC6944CD)"
                className="w-full px-3 py-4 focus:outline-none"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-[#E67E22] text-white rounded-lg hover:bg-[#d35400] disabled:bg-gray-300 font-medium min-w-[120px]"
            >
              {loading ? 'Searching...' : 'Track'}
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <XCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-red-800 mb-2">Shipment Not Found</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-sm text-gray-500">
              Please check your tracking number and try again
            </p>
          </div>
        )}

        {trackingData && !error && (
          <div className="space-y-4">
            {/* Share Button */}
            <div className="flex justify-end">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition"
              >
                <Share2 className="h-4 w-4" />
                Share Tracking
              </button>
            </div>

            {/* ===== HEADER SECTION ===== */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold break-words">{trackingData.trackingNumber || 'N/A'}</h2>
                  <p className="text-sm sm:text-base text-gray-500 break-words">
                    Booking: {trackingData.bookingNumber || 'N/A'} | Shipment: {trackingData.shipmentNumber || 'N/A'}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center ${currentStatusConfig.color}`}>
                    <StatusIcon status={trackingData.status} />
                    <span className="ml-2">{currentStatusConfig.label}</span>
                  </span>
                  <button
                    onClick={handleCopyShareLink}
                    className="p-2 hover:bg-gray-100 rounded-lg transition shrink-0"
                    title="Copy shareable link"
                  >
                    <Copy className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>


              {/* Route Information */}
              <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setShowRouteDetails((prev) => !prev)}
                  className="w-full px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-gray-500">Route Snapshot</p>
                    <p className="text-sm font-semibold text-gray-900 break-words">{getRouteOrigin()} → {getRouteDestination()}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 font-medium shrink-0">
                      {trackingData.shipmentDetails?.shippingMode || trackingData.shippingMode || 'DDU'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {showRouteDetails ? 'Hide details' : 'Show details'}
                    </span>
                    {showRouteDetails ? (
                      <ChevronUp className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </button>

                {showRouteDetails && (
                  <div className="px-4 pb-4 pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">FROM</p>
                        <p className="font-medium text-base sm:text-lg break-words">{getRouteOrigin()}</p>
                        {getEstimatedDeparture() && (
                          <p className="text-xs text-gray-400">
                            Dep: {formatDate(getEstimatedDeparture())}
                          </p>
                        )}
                      </div>
                      <div className="text-center sm:border-l sm:border-r border-gray-200">
                        <p className="text-xs text-gray-500 mb-1">CURRENT</p>
                        <p className="font-medium text-base sm:text-lg break-words">{getCurrentLocation()}</p>
                        <p className="text-xs text-gray-400">{getLastUpdate()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">TO</p>
                        <p className="font-medium text-base sm:text-lg break-words">{getRouteDestination()}</p>
                        {getEstimatedArrival() && (
                          <p className="text-xs text-gray-400">
                            ETA: {formatDate(getEstimatedArrival())}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-3 mt-3">
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Total Packages</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{trackingData.shipmentDetails?.totalPackages || trackingData.totalPackages || 0}</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Total Weight</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{trackingData.shipmentDetails?.totalWeight || trackingData.totalWeight || 0} kg</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Shipping Mode</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{trackingData.shipmentDetails?.shippingMode || trackingData.shippingMode || 'DDU'}</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Vessel</p>
                        {(() => {
                          const vessels = getShipmentVessels();
                          return (
                            <div className="mt-1">
                              {vessels.length > 0 ? (
                                <div className="space-y-1">
                                  {vessels.map((v, i) => <p key={i} className="text-sm font-semibold text-gray-900">{v}</p>)}
                                </div>
                              ) : (
                                <p className="text-lg font-semibold text-gray-900">N/A</p>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Voyage</p>
                        {(() => {
                          const voyages = getShipmentVoyages();
                          return (
                            <div className="mt-1">
                              {voyages.length > 0 ? (
                                <div className="space-y-1">
                                  {voyages.map((v, i) => <p key={i} className="text-sm font-semibold text-gray-900">{v}</p>)}
                                </div>
                              ) : (
                                <p className="text-lg font-semibold text-gray-900">N/A</p>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">BL Number</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{getShipmentBlValue()}</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Current Location</p>
                        <p className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">{getCurrentLocation()}</p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-3 col-span-2 lg:col-span-1">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Estimated Arrival</p>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{getEstimatedArrival() ? formatDate(getEstimatedArrival()) : 'Awaiting schedule update'}</p>
                      </div>
                    </div>

                    {getShipmentContainers().length > 0 && (
                      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
                        <p className="text-[11px] text-blue-700 uppercase tracking-wide font-semibold mb-2">Shipment Containers</p>
                        <p className="text-sm text-blue-900 break-words">{getShipmentContainerSummary()}</p>
                      </div>
                    )}

                    <div className="mt-3 rounded-lg border border-orange-100 bg-gradient-to-r from-orange-50 via-amber-50 to-white px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <div className="flex items-center gap-2 text-sm text-orange-700 font-medium">
                        <Activity className="h-4 w-4" />
                        <span>Live Tracking Timeline</span>
                      </div>
                      <span className="text-xs text-red-600">Newest updates first for faster review</span>
                    </div>

                    {/* Containers Section */}
                    {getShipmentContainers().length > 0 && (
                      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
                        <p className="text-sm font-semibold text-blue-900 mb-3">📦 Containers & Seals</p>
                        <div className="space-y-2">
                          {getShipmentContainers().map((container, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white p-2 rounded border border-blue-100">
                              <div>
                                <p className="text-xs text-blue-700 font-medium">Container #{idx + 1}</p>
                                <p className="text-xs text-gray-600 mt-1">
                                  <span className="font-medium ">Container:</span> {container.containerNumber} {" "}
                                </p>
                                <p className="text-xs text-gray-600">
                                  <span className="font-medium">Seal:</span> {container.sealNumber}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>

           
            {/* Rest of your tabs and content remain the same */}
            {/* ===== TABS ===== */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden -mt-2 border border-gray-200">
              <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b bg-gradient-to-r from-white to-orange-50/40">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Shipment Timeline</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Operational events, exceptions, and delivery milestones</p>
                </div>
                <div className="text-xs px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
                  Live event stream
                </div>
              </div>
              <div className="flex border-b overflow-x-auto px-2 sm:px-6 bg-white">
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'timeline' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => setActiveTab('packages')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'packages' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Packages ({trackingData.packages?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'overview' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'details' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Details
                </button>
              </div>

              {/* ===== TIMELINE TAB ===== */}
              {activeTab === 'timeline' && (
                <div className="p-4 sm:p-3">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-medium">Tracking Timeline</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Professional event log with milestone progress and operational notes</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTimelineView('oldToNew')}
                        className={`px-3 py-1 text-xs rounded-lg ${
                          timelineView === 'oldToNew' 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        Old → New
                      </button>
                      <button
                        onClick={() => setTimelineView('newToOld')}
                        className={`px-3 py-1 text-xs rounded-lg ${
                          timelineView === 'newToOld' 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        New → Old
                      </button>
                    </div>
                  </div>
                  
                  {(() => {
                    const timeline = getTimeline();
                    
                    if (timeline.length === 0) {
                      return <p className="text-gray-400 text-center py-4">No timeline events to display</p>;
                    }
                    
                    return (
                      <div className="relative mt-3 sm:mt-4 pl-1 sm:pl-2">
                        <div className="absolute left-4 sm:left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-orange-200 via-gray-200 to-transparent" />
                        <div className="space-y-2.5 sm:space-y-3">
                        {timeline.map((event, index) => {
                          const displayStatus = event.mappedStatus || event.status;
                          const StatusIconComponent = getStatusIcon(displayStatus);
                          const statusConfig = getStatusConfig(displayStatus);
                          const progress = statusConfig.progress;
                          const location = getDisplayLocation(event);
                          const isCurrentStep = timelineView === 'oldToNew' 
                            ? index === timeline.length - 1 
                            : index === 0;
                          const isCompleted = progress === 100;
                          const isHold = event.isHoldEvent === true;
                          const isReturn = displayStatus?.includes('return');
                          const isCustoms = displayStatus?.includes('customs');
                          const isBookingRequest = event.isBookingRequest === true;
                          const displayProgress = displayStatus === 'return_completed' ? 100 : progress;
                          const sealedContainers = Array.isArray(event.containers) && event.containers.length > 0 ? event.containers : getShipmentContainers();
                          const cleanedSealedContainers = sealedContainers.map((container) => ({
                            containerNumber: container.containerNumber,
                            sealNumber: container.sealNumber,
                          })).filter((container) => {
                            const containerNumber = container.containerNumber && container.containerNumber !== 'N/A';
                            const sealNumber = container.sealNumber && container.sealNumber !== 'N/A';
                            return containerNumber || sealNumber;
                          });
                          const hasSealedContainerInfo = (displayStatus === 'container_sealed' || event.status === 'container_sealed') && cleanedSealedContainers.length > 0;
                          const bookingRequestLabel = isManualShipment
                            ? MANUAL_TIMELINE_LABELS.booking_requested
                            : 'Booking Requested';
                          
                          // Special styling for booking requested
                          if (isBookingRequest) {
                            return (
                              <div key={index} className="relative flex items-start gap-2.5 sm:gap-4 opacity-80">
                                <div className="relative z-10">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 border border-gray-200 shadow-sm ring-2 sm:ring-4 ring-gray-100/80">
                                    <Package className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                                  </div>
                                </div>

                                  <div className="flex-1 pb-2 sm:pb-3">
                                    <div className="rounded-lg sm:rounded-xl border border-gray-200/90 bg-gray-50/80 p-2.5 sm:p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:shadow-sm">
                                    <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:justify-between sm:items-start sm:gap-2">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="text-sm sm:text-base leading-snug font-semibold text-gray-600">{bookingRequestLabel}</p>
                                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-600">Start</span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 flex items-center gap-1">
                                          <MapPin className="h-3 w-3 text-gray-400" />
                                          System
                                        </p>
                                      </div>
                                      <p className="text-[11px] sm:text-xs text-gray-500 bg-white sm:bg-transparent border border-gray-200 sm:border-0 rounded-full sm:rounded-none px-2 py-0.5 sm:px-0 sm:py-0 whitespace-nowrap">
                                        {formatDateOnly(event.date) || formatDate(event.timestamp || event.createdAt)}
                                      </p>
                                    </div>
                                    {getEventDescription(event) && (
                                      <p className="text-xs mt-2.5 p-2 rounded-lg text-gray-500 bg-white border border-gray-100">
                                        {getEventDescription(event)}
                                      </p>
                                    )}
                                    {!isHold && (
                                      <div className="mt-1.5 sm:mt-2.5 w-full h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-gray-300" style={{ width: '5%' }} />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          
                          return (
                            <div key={index} className="relative flex items-start gap-2.5 sm:gap-4">
                              <div className="relative z-10">
                                <div className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm ${
                                  isCurrentStep 
                                    ? isReturn ? 'bg-purple-100 border-2 border-purple-500 animate-[pulse_1.6s_ease-in-out_infinite]' 
                                      : isCustoms ? 'bg-blue-100 border-2 border-blue-500 animate-[pulse_1.6s_ease-in-out_infinite]'
                                      : 'bg-orange-100 border-2 border-orange-500 animate-[pulse_1.6s_ease-in-out_infinite]'
                                    : isCompleted 
                                      ? 'bg-green-100 border border-green-200' 
                                      : isHold
                                        ? 'bg-gray-200 border-2 border-gray-400'
                                        : 'bg-gray-100 border border-gray-200'
                                }`}>
                                  {isCurrentStep && (
                                    <span className={`absolute inset-0 rounded-full opacity-40 animate-[pulse_1.6s_ease-in-out_infinite] ${
                                      isReturn ? 'bg-purple-300' : isCustoms ? 'bg-blue-300' : 'bg-orange-300'
                                    }`} />
                                  )}
                                  {isCompleted && !isCurrentStep && !isReturn ? (
                                    <CheckCircle className="relative z-10 h-3.5 w-3.5 sm:h-5 sm:w-5 text-green-600" />
                                  ) : (
                                    <StatusIconComponent className={`relative z-10 h-3.5 w-3.5 sm:h-5 sm:w-5 ${
                                      isCurrentStep && !isHold ? (isReturn ? 'text-purple-600' : 'text-red-600') : 
                                      isHold ? 'text-gray-600' : 'text-gray-500'
                                    }`} />
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex-1 pb-2 sm:pb-3">
                                <div className={`rounded-lg sm:rounded-xl border p-2.5 sm:p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] sm:shadow-sm ${
                                  isCurrentStep && !isHold
                                    ? isReturn
                                      ? 'border-purple-200 bg-purple-50/80'
                                      : isCustoms
                                      ? 'border-blue-200 bg-blue-50/80'
                                      : 'border-orange-200 bg-orange-50/80'
                                    : isCompleted
                                    ? 'border-green-200 bg-green-50/70'
                                    : isHold
                                    ? 'border-gray-200 bg-gray-50'
                                    : 'border-gray-200 bg-white'
                                }`}>
                                  <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:justify-between sm:items-start sm:gap-2">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <p className={`text-sm sm:text-base leading-snug font-semibold ${
                                          isCurrentStep && !isHold ? (isReturn ? 'text-purple-700' : 'text-orange-700') : 
                                          isHold ? 'text-gray-600' : 'text-gray-900'
                                        }`}>
                                          {statusConfig.label}
                                        </p>
                                        {/* <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                                          displayProgress === 100 ? 'bg-green-100 text-green-700' : 
                                          isHold ? 'bg-gray-100 text-gray-600' : 
                                          isReturn ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                          {displayProgress}%
                                        </span> */}
                                        {isCurrentStep && !isHold && !isReturn && (
                                          <span className="text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full">
                                            Current
                                          </span>
                                        )}
                                        {isCurrentStep && isReturn && (
                                          <span className="text-[10px] bg-purple-500 text-white px-1.5 py-0.5 rounded-full">
                                            Return
                                          </span>
                                        )}
                                        {isHold && isCurrentStep && (
                                          <span className="text-[10px] bg-gray-500 text-white px-1.5 py-0.5 rounded-full">
                                            On Hold
                                          </span>
                                        )}
                                      </div>
                                      
                                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 flex items-center gap-1">
                                        <MapPin className="h-3 w-3 text-gray-400" />
                                        {location}
                                      </p>
                                      
                                      {hasSealedContainerInfo && (
                                        <div className="mt-2 rounded-lg border border-orange-200 bg-orange-50/70 px-3 py-2">
                                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-orange-700 mb-1.5">
                                            <Container className="h-3.5 w-3.5" />
                                            Container, Sealed & BL Numbers
                                          </div>
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                                            <p className="text-gray-700 break-words">
                                              <span className="font-semibold text-red-600">Container:</span>{' '}
                                              {cleanedSealedContainers.map((container) => container.containerNumber).filter((value) => value && value !== 'N/A').join(', ') || 'N/A'}
                                            </p>
                                            <p className="text-gray-700 break-words">
                                              <span className="font-semibold text-red-600">Seal:</span>{' '}
                                              {cleanedSealedContainers.map((container) => container.sealNumber).filter((value) => value && value !== 'N/A').join(', ') || 'N/A'}
                                            </p>
                                            <p className="text-gray-700 break-words">
                                              <span className="font-semibold text-red-600">BL:</span>{' '}
                                              {cleanedSealedContainers.map((container) => container.blNumber).filter((value) => value && value !== 'N/A').join(', ') || 'N/A'}
                                            </p>
                                          </div>
                                        </div>
                                      )}
                                      
                                    </div>
                                    
                                    <div className="text-left sm:text-right">
                                      <p className="text-[11px] sm:text-xs text-gray-500 bg-white sm:bg-transparent border border-gray-200 sm:border-0 rounded-full sm:rounded-none px-2 py-0.5 sm:px-0 sm:py-0 whitespace-nowrap">
                                        {formatDateOnly(event.date) || formatDate(event.timestamp || event.createdAt)}
                                      </p>
                                      
                                    </div>
                                  </div>
                                  
                                  {!isHold && !statusConfig.hideProgress && (
                                    <div className="mt-1.5 sm:mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full transition-all duration-500 ${
                                          displayStatus === 'return_approved' ? 'bg-purple-500' :
                                          displayProgress === 100 ? 'bg-green-500' : 
                                          isReturn ? 'bg-purple-500' : 'bg-orange-500'
                                        }`}
                                        style={{ width: `${displayProgress}%` }}
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* ===== PACKAGES TAB ===== */}
              {activeTab === 'packages' && (
                <div className="p-6">
                  <h3 className="font-medium mb-3 flex items-center text-center border-b border-orange-200">
                        <Package className="h-4 w-4 text-orange-500 mr-2 " />
                        Package Details
                      </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Vessel</p>
                      {(() => {
                        const vessels = getShipmentVessels();
                        return (
                          <div className="mt-1">
                            {vessels.length > 0 ? (
                              <div className="space-y-1">
                                {vessels.map((v, i) => <p key={i} className="font-medium text-sm text-gray-900">{v}</p>)}
                              </div>
                            ) : (
                              <p className="font-medium text-sm text-gray-900">N/A</p>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Voyage</p>
                      {(() => {
                        const voyages = getShipmentVoyages();
                        return (
                          <div className="mt-1">
                            {voyages.length > 0 ? (
                              <div className="space-y-1">
                                {voyages.map((v, i) => <p key={i} className="font-medium text-sm text-gray-900">{v}</p>)}
                              </div>
                            ) : (
                              <p className="font-medium text-sm text-gray-900">N/A</p>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">BL Number</p>
                      <p className="font-medium text-sm text-gray-900 mt-1">{getShipmentBlValue()}</p>
                    </div>
                  </div>
                  {trackingData.packages && trackingData.packages.length > 0 ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 mb-4 auto-rows-max">
                        {(showAllPackages ? trackingData.packages : trackingData.packages.slice(0, 6)).map((pkg, index) => {
                          const isExpanded = expandedPackages.has(index);
                          return (
                            <div
                              key={index}
                              className={`relative bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-0.5 self-start`}
                            >
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">Package #{index + 1}</span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                      {pkg.packagingType || pkg.type || 'Carton'}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-gray-400 mt-1">{pkg.shortDescription || ''}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  {pkg.hazardous === 'Yes' && (
                                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                      Hazardous
                                    </span>
                                  )}
                                  <button
                                    onClick={() => togglePackageExpanded(index)}
                                    aria-expanded={isExpanded}
                                    className="p-1.5 bg-orange-50 hover:bg-orange-100 text-red-600 rounded-md text-sm transition"
                                  >
                                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                  </button>
                                </div>
                              </div>

                              <p className={`text-sm text-gray-600 mb-3 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                                {pkg.description || pkg.goodsDescription || 'No description'}
                              </p>

                              {/* Container & Seal Info - Always Visible */}
                              {(pkg.containerNumber || pkg.sealNumber || getShipmentContainers().length > 0) && (
                                <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                                  <p className="text-xs font-semibold text-blue-700 mb-2">📦 Container Info</p>
                                  <div className="space-y-1">
                                    {(() => {
                                      const containerValue = pkg.containerNumber || getShipmentContainerValue('containerNumber');
                                      const cleanedContainer = containerValue.split(', ').filter(s => s && s.trim() !== 'N/A').join(', ');
                                      return cleanedContainer && (
                                        <p className="text-xs text-blue-600">
                                          <span className="font-medium">Container:</span> {cleanedContainer}
                                        </p>
                                      );
                                    })()}
                                    {(() => {
                                      const sealValue = pkg.sealNumber || getShipmentContainerValue('sealNumber');
                                      const cleanedSeals = sealValue.split(', ').filter(s => s && s.trim() !== 'N/A').join(', ');
                                      return cleanedSeals && (
                                        <p className="text-xs text-blue-600">
                                          <span className="font-medium">Seal:</span> {cleanedSeals}
                                        </p>
                                      );
                                    })()}
                                  </div>
                                </div>
                              )}

                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-xs text-gray-500">Quantity</p>
                                  <p className="font-medium">{pkg.quantity || 1}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Weight</p>
                                  <p className="font-medium">{pkg.weight || 0} kg</p>
                                </div>
                                {isExpanded && (
                                  <>
                                    <div>
                                      <p className="text-xs text-gray-500">Volume</p>
                                      <p className="font-medium">{pkg.volume || 0} m³</p>
                                    </div>
                                  </>
                                )}
                              </div>

                              {isExpanded && (
                                <div className="mt-3 pt-3 border-t text-xs text-gray-500 text-center">
                                  Click the arrow to collapse
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {trackingData.packages.length > 6 && (
                        <button
                          onClick={() => setShowAllPackages(!showAllPackages)}
                          className="w-full py-2 text-orange-500 text-sm flex items-center justify-center"
                        >
                          {showAllPackages ? 'Show Less' : `Show All (${trackingData.packages.length} packages)`}
                          {showAllPackages ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                        </button>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-400 text-center py-4">No package information available</p>
                  )}
                </div>
              )}

              {/* ===== OVERVIEW TAB ===== */}
              {activeTab === 'overview' && (
                <div className="p-6">
                  <div className="grid grid-cols-1">
                    <div className="px-6">
                      <h3 className="font-medium mb-3 flex items-center text-center border-b border-orange-200">
                        <ShipIcon className="h-4 w-4 text-orange-500 mr-2 " />
                        Shipment Summary
                      </h3>
                      <div className="space-y-2 ">
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-gray-500">Total Packages</span>
                          <span className="font-medium">{trackingData.shipmentDetails?.totalPackages || trackingData.totalPackages || 0}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-gray-500">Total Weight</span>
                          <span className="font-medium">{trackingData.shipmentDetails?.totalWeight || trackingData.totalWeight || 0} kg</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-gray-500">Total Volume</span>
                          <span className="font-medium">{trackingData.shipmentDetails?.totalVolume || trackingData.totalVolume || 0} m³</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-gray-500">Shipping Mode</span>
                          <span className="font-medium">{trackingData.shipmentDetails?.shippingMode || trackingData.shippingMode || 'DDU'}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-gray-500">Service Type</span>
                          <span className="font-medium capitalize">{trackingData.shipmentDetails?.serviceType || 'standard'}</span>
                        </div>
                        {(() => {
                          const vessels = getShipmentVessels();
                          return vessels.length > 0 ? (
                            <div>
                              {vessels.map((v, i) => (
                                <div key={`vessel-${i}`} className="flex justify-between py-1 border-b">
                                  <span className="text-gray-500">{vessels.length > 1 ? `Vessel ${i + 1}` : 'Vessel'}</span>
                                  <span className="font-medium">{v}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex justify-between py-1 border-b">
                              <span className="text-gray-500">Vessel</span>
                              <span className="font-medium">N/A</span>
                            </div>
                          );
                        })()}
                        {(() => {
                          const voyages = getShipmentVoyages();
                          return voyages.length > 0 ? (
                            <div>
                              {voyages.map((v, i) => (
                                <div key={`voyage-${i}`} className="flex justify-between py-1 border-b">
                                  <span className="text-gray-500">{voyages.length > 1 ? `Voyage ${i + 1}` : 'Voyage'}</span>
                                  <span className="font-medium">{v}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex justify-between py-1 border-b">
                              <span className="text-gray-500">Voyage</span>
                              <span className="font-medium">N/A</span>
                            </div>
                          );
                        })()}
                        {(() => {
                          const blText = getShipmentBlValue();
                          return blText && blText !== 'N/A' ? (
                            <div className="flex justify-between py-1 border-b">
                              <span className="text-gray-500">BL Number</span>
                              <span className="font-medium">{blText}</span>
                            </div>
                          ) : null;
                        })()}
                        <div className="flex justify-between py-1">
                          <span className="text-gray-500">Container Number</span>
                          <span className="font-medium capitalize">{getShipmentContainerValue('containerNumber')}</span>
                        </div>
                        {(() => {
                          const sealValue = getShipmentContainerValue('sealNumber');
                          const cleanedSeals = sealValue.split(', ').filter(s => s && s.trim() !== 'N/A').join(', ');
                          return cleanedSeals && (
                            <div className="flex justify-between py-1">
                              <span className="text-gray-500">Seal Number</span>
                              <span className="font-medium capitalize">{cleanedSeals}</span>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {trackingData.consolidation && (
                     <div className="md:col-span-2 mt-6 px-6">
                        <h3 className="font-medium mb-3 flex items-center">
                          <Layers className="h-4 w-4 text-orange-500 mr-2" />
                          Consolidation Information
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-orange-50 p-4 rounded-lg">
                          <div>
                            <p className="text-xs text-gray-500">Queue Number</p>
                            <p className="font-medium">{trackingData.consolidation.number || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Container</p>
                            <p className="font-medium">{getShipmentContainerValue('containerNumber')}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Origin</p>
                            <p className="font-medium">{trackingData.consolidation.originWarehouse || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Destination</p>
                            <p className="font-medium">{trackingData.consolidation.destinationPort || 'N/A'}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ===== DETAILS TAB ===== */}
              {activeTab === 'details' && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getShipmentContainers().length > 0 && (
                      <div className="md:col-span-2">
                        <h3 className="font-medium mb-3 flex items-center">
                          <Box className="h-4 w-4 text-orange-500 mr-2" />
                          Container & Seal Numbers
                        </h3>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                          {getShipmentContainers().map((container, index) => (
                            <div key={index} className="bg-white rounded-lg border border-blue-100 p-3">
                              <p className="text-xs text-blue-700 font-medium mb-1">Container #{index + 1}</p>
                              {container.containerNumber && container.containerNumber !== 'N/A' && (
                                <p className="text-sm text-gray-700">Container: {container.containerNumber}</p>
                              )}
                              {container.sealNumber && container.sealNumber !== 'N/A' && (
                                <p className="text-sm text-gray-700">Seal: {container.sealNumber}</p>
                              )}
                              {container.blNumber && container.blNumber !== 'N/A' && (
                                <p className="text-sm text-gray-700">BL: {container.blNumber}</p>
                              )}
                              {(!container.containerNumber || container.containerNumber === 'N/A') && (!container.sealNumber || container.sealNumber === 'N/A') && (!container.blNumber || container.blNumber === 'N/A') && (
                                <p className="text-xs text-gray-500 italic">No valid data</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {trackingData.sender && (
                      <div>
                        <h3 className="font-medium mb-3 flex items-center">
                          <User className="h-4 w-4 text-orange-500 mr-2" />
                          Sender Information
                        </h3>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                          <p className="font-medium">{trackingData.sender.name || 'N/A'}</p>
                          {trackingData.sender.companyName && (
                            <p className="text-sm text-gray-600">{trackingData.sender.companyName}</p>
                          )}
                          <p className="text-sm text-gray-500 flex items-center">
                            <Mail className="h-3 w-3 mr-1" /> {trackingData.sender.email || 'N/A'}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Phone className="h-3 w-3 mr-1" /> {trackingData.sender.phone || 'N/A'}
                          </p>
                          <p className="text-sm text-gray-500">
                            <MapPin className="h-3 w-3 inline mr-1" /> {formatAddress(trackingData.sender.address)}
                          </p>
                        </div>
                      </div>
                    )}

                    {trackingData.receiver && (
                      <div>
                        <h3 className="font-medium mb-3 flex items-center">
                          <User className="h-4 w-4 text-orange-500 mr-2" />
                          Receiver Information
                        </h3>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                          <p className="font-medium">{trackingData.receiver.name || 'N/A'}</p>
                          {trackingData.receiver.companyName && (
                            <p className="text-sm text-gray-600">{trackingData.receiver.companyName}</p>
                          )}
                          <p className="text-sm text-gray-500 flex items-center">
                            <Mail className="h-3 w-3 mr-1" /> {trackingData.receiver.email || 'N/A'}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Phone className="h-3 w-3 mr-1" /> {trackingData.receiver.phone || 'N/A'}
                          </p>
                          <p className="text-sm text-gray-500">
                            <MapPin className="h-3 w-3 inline mr-1" /> {formatAddress(trackingData.receiver.address)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {(trackingData.shipmentDetails?.notes || trackingData.notes) && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Notes</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          {trackingData.shipmentDetails?.notes || trackingData.notes}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* PDF Download Button */}
            {/* <div className="flex justify-end">
              <PDFDownloadLink
                document={<TrackingPDF data={trackingData} />}
                fileName={`tracking-${trackingData?.trackingNumber || 'shipment'}.pdf`}
                className="px-4 py-2 bg-[#E67E22] text-white rounded-lg hover:bg-[#d35400] text-sm flex items-center"
              >
                {({ loading }) => (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                  </>
                )}
              </PDFDownloadLink>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
