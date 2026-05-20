import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Factory, 
  Zap, 
  Droplets, 
  Thermometer, 
  Truck, 
  Target,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface FormData {
  electricity: string;
  water: string;
  oreGrade: string;
  furnaceTemperature: string;
  throughput: string;
}

interface FormErrors {
  electricity?: string;
  water?: string;
  oreGrade?: string;
  furnaceTemperature?: string;
  throughput?: string;
}

export function ProcessInputForm() {
  const [formData, setFormData] = useState<FormData>({
    electricity: "",
    water: "",
    oreGrade: "",
    furnaceTemperature: "",
    throughput: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Allow only numeric input with decimal points
    const numericRegex = /^\d*\.?\d*$/;
    if (value === "" || numericRegex.test(value)) {
      setFormData(prev => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.electricity) {
      newErrors.electricity = "Electricity consumption is required";
    } else if (parseFloat(formData.electricity) <= 0) {
      newErrors.electricity = "Electricity must be greater than 0";
    }

    if (!formData.water) {
      newErrors.water = "Water consumption is required";
    } else if (parseFloat(formData.water) <= 0) {
      newErrors.water = "Water consumption must be greater than 0";
    }

    if (!formData.oreGrade) {
      newErrors.oreGrade = "Ore grade is required";
    } else if (parseFloat(formData.oreGrade) < 0 || parseFloat(formData.oreGrade) > 100) {
      newErrors.oreGrade = "Ore grade must be between 0-100%";
    }

    if (!formData.furnaceTemperature) {
      newErrors.furnaceTemperature = "Furnace temperature is required";
    } else if (parseFloat(formData.furnaceTemperature) < 0) {
      newErrors.furnaceTemperature = "Temperature must be greater than 0";
    }

    if (!formData.throughput) {
      newErrors.throughput = "Throughput is required";
    } else if (parseFloat(formData.throughput) <= 0) {
      newErrors.throughput = "Throughput must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          electricity: "",
          water: "",
          oreGrade: "",
          furnaceTemperature: "",
          throughput: ""
        });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      electricity: "",
      water: "",
      oreGrade: "",
      furnaceTemperature: "",
      throughput: ""
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-green-700">
            Process Data Submitted Successfully!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Your process data has been sent to our AI model for analysis. 
            You'll receive sustainability insights and recommendations shortly.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Target className="h-3 w-3 mr-1" />
              Processing Started
            </Badge>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              <Factory className="h-3 w-3 mr-1" />
              LCA Analysis Queued
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Process Input Form</h1>
        <p className="text-muted-foreground">
          Enter your process parameters to generate sustainability insights and AI-powered recommendations
        </p>
      </div>

      {/* Info Alert */}
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          All fields are required. Data will be processed through our AI model to generate 
          Life Cycle Assessment (LCA) metrics and sustainability recommendations.
        </AlertDescription>
      </Alert>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Energy Consumption Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                Energy Consumption
              </CardTitle>
              <CardDescription>
                Electrical energy usage for the process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="electricity">Electricity (kWh)</Label>
                <Input
                  id="electricity"
                  type="text"
                  placeholder="e.g., 15000"
                  value={formData.electricity}
                  onChange={(e) => handleInputChange("electricity", e.target.value)}
                  className={errors.electricity ? "border-red-500" : ""}
                />
                {errors.electricity && (
                  <p className="text-sm text-red-500">{errors.electricity}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Total electrical energy consumed per processing cycle
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Water Usage Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-600" />
                Water Usage
              </CardTitle>
              <CardDescription>
                Water consumption for the process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="water">Water (Liters)</Label>
                <Input
                  id="water"
                  type="text"
                  placeholder="e.g., 50000"
                  value={formData.water}
                  onChange={(e) => handleInputChange("water", e.target.value)}
                  className={errors.water ? "border-red-500" : ""}
                />
                {errors.water && (
                  <p className="text-sm text-red-500">{errors.water}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Total water used including cooling and processing
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Process Parameters Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Process Parameters
              </CardTitle>
              <CardDescription>
                Key operational parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="oreGrade">Ore Grade (%)</Label>
                <Input
                  id="oreGrade"
                  type="text"
                  placeholder="e.g., 2.5"
                  value={formData.oreGrade}
                  onChange={(e) => handleInputChange("oreGrade", e.target.value)}
                  className={errors.oreGrade ? "border-red-500" : ""}
                />
                {errors.oreGrade && (
                  <p className="text-sm text-red-500">{errors.oreGrade}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Percentage of valuable material in ore (0-100%)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Temperature & Throughput Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-red-600" />
                Operating Conditions
              </CardTitle>
              <CardDescription>
                Temperature and throughput specifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="furnaceTemperature">Furnace Temperature (°C)</Label>
                <Input
                  id="furnaceTemperature"
                  type="text"
                  placeholder="e.g., 1200"
                  value={formData.furnaceTemperature}
                  onChange={(e) => handleInputChange("furnaceTemperature", e.target.value)}
                  className={errors.furnaceTemperature ? "border-red-500" : ""}
                />
                {errors.furnaceTemperature && (
                  <p className="text-sm text-red-500">{errors.furnaceTemperature}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Operating temperature of the furnace
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="throughput">Throughput (tons/day)</Label>
                <Input
                  id="throughput"
                  type="text"
                  placeholder="e.g., 500"
                  value={formData.throughput}
                  onChange={(e) => handleInputChange("throughput", e.target.value)}
                  className={errors.throughput ? "border-red-500" : ""}
                />
                {errors.throughput && (
                  <p className="text-sm text-red-500">{errors.throughput}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Daily material processing capacity
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={resetForm}
            disabled={isSubmitting}
          >
            Reset Form
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <Truck className="h-4 w-4 inline mr-1" />
              Data will be processed by AI model
            </div>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit to AI Model"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}